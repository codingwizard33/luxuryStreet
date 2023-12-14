import { getColorsService } from '../services/getColorsService.js';

export const getColors = async (req, res) => {
  const response = await getColorsService();

  return res.status(response.status).json(response.message);
};
