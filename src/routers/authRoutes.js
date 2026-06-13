import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  registerUserController,
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
} from '../controllers/authController.js';

import { registerUserSchema, loginUserSchema } from '../validation/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  celebrate(registerUserSchema),
  registerUserController,
);

authRouter.post('/login', celebrate(loginUserSchema), loginUserController);

authRouter.post('/logout', logoutUserController);

authRouter.post('/refresh', refreshUserSessionController);

export default authRouter;
