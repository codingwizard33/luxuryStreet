import express from 'express';

import {
  forgotPassword,
  refreshToken,
  resetPassword,
  signIn,
  signUp,
  updatePassword
} from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.get('/refresh-token', authMiddleware, refreshToken);
router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/:resetPasswordToken', resetPassword);
router.put('/update-password', authMiddleware, updatePassword);

export default router;
