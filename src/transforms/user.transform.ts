import { UserInterface } from "../interfaces/users.interfaces";
import { getFullName } from "../utils/functions";


export const transformUser = (user: UserInterface) => {
    return {
        id: user.id || user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullname: getFullName(user),
        email: user.email,
        role: user.role,
    }
}

export const transformUsers = (users: UserInterface[]) => {
    return users.map(transformUser);
}