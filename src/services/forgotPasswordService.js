import { forgotPasswordEmail } from '../emails/forgotPasswordEmail.js';
import User from '../models/User.js';
import { signJWT } from './jwtService.js';

export const forgotPasswordService = async (req) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email});

  if (!user)
    return {
        status: 404,
        message: `The requested username does not found`
    };

  try {
    var resetPasswordToken = signJWT(user);
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }

  const resetPasswordLink = `${process.env.APP_URL}/auth/reset-password/${resetPasswordToken}`;

  try {
    await forgotPasswordEmail(resetPasswordLink, email);

    return {
      status: 200,
      message: `The reset password link was sent to "${email}" email address`
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
