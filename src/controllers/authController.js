import { forgotPasswordService } from '../services/auth/forgotPasswordService.js';
import { refreshTokenService } from '../services/auth/refreshTokenService.js';
import { resetPasswordService } from '../services/auth/resetPasswordService.js';
import { signInService } from '../services/auth/signInService.js';
import { signUpService } from '../services/auth/singUpService.js';
import { updatePasswordService } from '../services/auth/updatePasswordService.js';

export const signUp = async (req, res) => {
  const response = await signUpService(req);

  return res.status(response.status).json(response.message);
};

export const signIn = async (req, res) => {
  const response = await signInService(req);

  return res.status(response.status).json(response.message);
};

export const refreshToken = async (req, res) => {
  const response = await refreshTokenService(req);

  return res.status(response.status).json(response.message);
};

export const forgotPassword = async (req, res) => {
  const response = await forgotPasswordService(req);

  return res.status(response.status).json(response.message);
};

export const resetPassword = async (req, res) => {
  const response = await resetPasswordService(req);

  return res.status(response.status).json(response.message);
};

export const updatePassword = async (req, res) => {
  const response = await updatePasswordService(req);

  return res.status(response.status).json(response.message);
};
