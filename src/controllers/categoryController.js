import { getCategoriesService } from '../services/getCategoriesService.js';

export const getCategories = async (req, res) => {
  const response = await getCategoriesService();

  return res.status(response.status).json(response.message);
};
