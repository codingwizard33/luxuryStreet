import {
  signJWT,
  verifyJWT
} from './jwtService.js';

export const refreshTokenService = async (req) => {
  const authToken = req.header('Authorization').split(' ')[1];

  try {
    var { _id, email } = verifyJWT(authToken);
  } catch (error) {
    return {
      status: 403,
      message: error.message
    };
  }

  const userData = {
    _id,
    email
  };

  const newAuthToken = signJWT(userData);

  return {
    status: 200,
    message: newAuthToken
  };
};
