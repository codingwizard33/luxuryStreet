import { getCategoryService } from '../services/getCategoryService.js';

export const getCategory = async (req, res) => {
  const response = await getCategoryService();

  return res.status(response.status).json(response.message);
};
