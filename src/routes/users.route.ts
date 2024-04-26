import express from 'express';
const router = express.Router();

import UserController from '../controllers/users.controller';
import asyncHandler from '../middlewares/asyncHandler';
import { validate } from '../middlewares/validate';
import { createUserValidation } from '../validations/user.validation';

router.get('/',  asyncHandler(UserController.getUsers))
router.post('/', validate(createUserValidation), asyncHandler(UserController.createUser))

export default router;