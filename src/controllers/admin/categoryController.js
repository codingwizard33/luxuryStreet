import { createCategoryService } from '../../services/admin/createCategoryService.js';
import { updateCategoryService } from '../../services/admin/updateCategoryService.js';
import { deleteCategoryService } from '../../services/admin/deleteCategoryService.js';
import { getCategoriesService } from '../../services/admin/getCategoriesService.js';

export const createCategory = async (req, res) => {
  const response = await createCategoryService(req);

  return res.status(response.status).json(response.message);
};

export const updateCategory = async (req, res) => {
  const response = await updateCategoryService(req);

  return res.status(response.status).json(response.message);
};

export const deleteCategory = async (req, res) => {
  const response = await deleteCategoryService(req);

  return res.status(response.status).json(response.message);
};

export const getCategories = async (req, res) => {
  const response = await getCategoriesService();

  return res.status(response.status).json(response.message);
};
