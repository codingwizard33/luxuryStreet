import jwt from 'jsonwebtoken';

export const signJWT = (user) => {
  const token = jwt.sign({ _id: user._id, email: user.email, role: user.role.name }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
};

export const verifyJWT = (token) => {
  const response = jwt.verify(token, process.env.JWT_SECRET);
  
  return response;
};
