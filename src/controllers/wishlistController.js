import { createWishListService } from '../services/createWishListService.js';
import { deleteWishListService } from '../services/deleteWishListService.js';
import { getWishListService } from '../services/getWishListService.js';

export const createWishList = async (req, res) => {
  const response = await createWishListService(req);

  return res.status(response.status).json(response.message);
};

export const deleteWishList = async (req, res) => {
  const response = await deleteWishListService(req);

  return res.status(response.status).json(response.message);
};

export const getWishList = async (req, res) => {
  const response = await getWishListService(req);

  return res.status(response.status).json(response.message);
};
