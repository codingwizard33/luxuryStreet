import bcrypt from 'bcrypt';

import User from '../../models/User.js';
import { verifyJWT } from './jwtService.js';
import { passwordValidation } from '../../validations/passwordValidation.js'

export const resetPasswordService = async (req) => {
  const resetPasswordToken = req.params.resetPasswordToken;
  const { password } = req.body;

  try {
    var { _id } = verifyJWT(resetPasswordToken);
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
  
  const { error } = passwordValidation.validate(req.body);

  if (error) return { status: 500, message: error.details[0].message };

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.findByIdAndUpdate(
      _id,
      { $set: { password: hashedPassword } },
      { new: true }
    );

    return {
      status: 201,
      message: 'The user password successfully updated'
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
