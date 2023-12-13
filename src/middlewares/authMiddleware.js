import { verifyJWT } from '../services/auth/jwtService.js';

export const authMiddleware = async (req, res, next) => {
  try {
    var authToken = req.header('Authorization').split(' ')[1];
  } catch (error) {
    return res.status(403).json('Authentication failed');
  }
  
  try {
    verifyJWT(authToken);
  } catch (error) {
    return res.status(403).json(error.message);
  }
  
  return next();
};
