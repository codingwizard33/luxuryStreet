import { createProductService } from '../../services/admin/createProductService.js';
import { updateProductService } from '../../services/admin/updateProductService.js';
import { deleteProductService } from '../../services/admin/deleteProductService.js';
import { getProductsService } from '../../services/admin/getProductsService.js';

export const createProduct = async (req, res) => {
  const response = await createProductService(req);

  return res.status(response.status).json(response.message);
};

export const updateProduct = async (req, res) => {
  const response = await updateProductService(req);

  return res.status(response.status).json(response.message);
};

export const deleteProduct = async (req, res) => {
  const response = await deleteProductService(req);

  return res.status(response.status).json(response.message);
};

export const getProducts = async (req, res) => {
  const response = await getProductsService();

  return res.status(response.status).json(response.message);
};
