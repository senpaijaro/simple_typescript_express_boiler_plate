import bcrypt from 'bcrypt';

export const pick = (object: any, keys: any) => {
  return keys.reduce((obj: any, key: any) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
}

export const getFullName = (obj: any) => {
    let fullname = '';
    if (obj.firstName) fullname += obj.firstName + ' ';
    if (obj.middleName) fullname += obj.middleName + ' ';
    if (obj.lastName) fullname += obj.lastName;
    fullname = fullname.trim();
    return fullname;
}