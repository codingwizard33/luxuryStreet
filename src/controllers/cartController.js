import { addItemToCartService } from '../services/addItemToCartService.js';
import { removeItemFromCartService } from '../services/removeItemFromCartService.js';

export const addItemToCart = async (req, res) => {
  const response = await addItemToCartService(req);

  return res.status(response.status).json(response.message);
};

export const removeItemFromCart = async (req, res) => {
  const response = await removeItemFromCartService(req);

  return res.status(response.status).json(response.message);
};
