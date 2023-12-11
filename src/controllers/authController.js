import { forgotPasswordService } from '../services/forgotPasswordService.js';
import { refreshTokenService } from '../services/refreshTokenService.js';
import { resetPasswordService } from '../services/resetPasswordService.js';
import { signInService } from '../services/signInService.js';
import { signUpService } from '../services/singUpService.js';
import { updatePasswordService } from '../services/updatePasswordService.js';

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
