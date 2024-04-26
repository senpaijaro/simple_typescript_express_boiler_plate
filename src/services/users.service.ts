
import httpStatus from 'http-status';
import { UserInterface } from '../interfaces/users.interfaces';
import User from '../models/User';
import ErrorResponse from '../utils/ErrorResponse';
import _Model from '../cores/Model';
import { hashPassword } from '../utils/functions';
import { transformUser, transformUsers } from '../transforms/user.transform';
import { RESPONSE_MESSAGE } from '../utils/constant';

class UsersService extends _Model {

  public static async isEmailExist(email: string) {
    const user = await User.exists({ email });
    return await user;
  }

  public static async all() {
    const users = await User.find().lean();
    return users;
  }

  public static async create(req: any) {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      role: req.body.role || 'user',
      password: await hashPassword(req.body.password)
    });
    
    if ((await this.isEmailExist(user.email))) {
      throw new ErrorResponse(httpStatus.BAD_REQUEST, RESPONSE_MESSAGE.USER.EMAIL_ALREADY_EXISTS)
    }
    
    await user.save();
    return transformUser(user);
  }

  public static async getAllUsers() {
    const users: UserInterface[] = await this.all();
    return transformUsers(users);
  }
}

export default UsersService;