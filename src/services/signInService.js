import bcrypt from 'bcrypt';

import User from '../models/User.js';
import { signJWT } from './jwtService.js';

export const signInService = async (req) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) 
    return {
      status: 404,
      message: 'The requested user not found'
    };

  const compared = await bcrypt.compare(password, user.password);
  if (!compared)
    return {
      status: 403,
      message: 'The user credentials do not match'
    };

  const authToken = signJWT(user);

  const userResponse = {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    authToken: authToken
  };

  return { status: 200, message: userResponse };
};
