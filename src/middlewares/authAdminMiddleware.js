import { verifyJWT } from '../services/auth/jwtService.js';

export const authAdminMiddleware = async (req, res, next) => {
  try {
    var authToken = req.header('Authorization').split(' ')[1];
  } catch (error) {
    return res.status(403).json('Authentication failed');
  }
  
  try {
    const decoded = verifyJWT(authToken);
    if (decoded.role !== 'admin')
      return res.status(403).json('Authentication failed');
  } catch (error) {
    return res.status(403).json(error.message);
  }
  
  return next();
};
