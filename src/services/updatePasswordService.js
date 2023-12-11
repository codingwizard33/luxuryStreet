import bcrypt from 'bcrypt';

import User from '../models/User.js';
import { passwordValidation } from '../validations/passwordValidation.js';
import { verifyJWT } from './jwtService.js';

export const updatePasswordService = async (req) => {
  const authToken = req.header('Authorization').split(' ')[1];
  const { currentPassword, password } = req.body;

  const { _id } = verifyJWT(authToken);
  const user = await User.findById(_id);
  const checked = await bcrypt.compare(currentPassword, user.password);

  if (!checked) return { status: 401, message: 'The user password was wrong' };

  const { error } = passwordValidation.validate(req.body);
  if (error) return { status: 401, message: error.details[0].message };

  const hashedPassword = await bcrypt.hash(password, 10);

  user.password = hashedPassword;
  await user.save();

  return {
    status: 201,
    message: 'The user password has been changed'
  };
};
