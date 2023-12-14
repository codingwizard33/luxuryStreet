import { getSizesService } from '../services/getSizesService.js';

export const getSizes = async (req, res) => {
  const response = await getSizesService();

  return res.status(response.status).json(response.message);
};
