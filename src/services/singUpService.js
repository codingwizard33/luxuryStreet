import bcrypt from 'bcrypt';

import User from '../models/User.js';
import { signUpValidation } from '../validations/signUpValidation.js';
import { signJWT } from './jwtService.js';

export const signUpService = async (req) => {
  const { firstName, lastName, email, password } = req.body;
  const { error } = signUpValidation.validate(req.body);

  if (error) return { status: 500, message: error.details[0].message };

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });
    
    const authToken = signJWT(user);

    const userResponse = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      authToken: authToken
    };

    return {
      status: 201,
      message: userResponse
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
