import { createCartService } from '../services/createCartService.js';
import { deleteCartService } from '../services/deleteCartService.js';
import { getCartService } from '../services/getCartService.js';

export const createCart = async (req, res) => {
  const response = await createCartService(req);

  return res.status(response.status).json(response.message);
};

export const deleteCart = async (req, res) => {
  const response = await deleteCartService(req);

  return res.status(response.status).json(response.message);
};

export const getCart = async (req, res) => {
  const response = await getCartService(req);

  return res.status(response.status).json(response.message);
};
