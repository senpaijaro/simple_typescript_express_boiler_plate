import { Request, Response } from 'express';
import httpStatus from 'http-status';

import UserServices from '../services/users.service';
import { RESPONSE_MESSAGE } from '../utils/constant';


class UsersController {

    public static async getUsers(req: Request, res: Response) {
        const users = await UserServices.getAllUsers();
        
        res.status(httpStatus.OK).json({
            c: httpStatus.OK,
            m: RESPONSE_MESSAGE.USER.FETCHED,
            d: {
                users
            }
        });
    }
    
    public static async createUser(req: Request, res: Response){
        const user = await UserServices.create(req);

        res.status(httpStatus.OK).json({
            c: httpStatus.OK,
            m: RESPONSE_MESSAGE.USER.CREATED,
            d: {
                user
            }
        });
    }
}

export default UsersController;