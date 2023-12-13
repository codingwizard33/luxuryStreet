import { createCategoryService } from '../../services/admin/createCategoryService.js';
import { editCategoryService } from '../../services/admin/editCategoryService.js';
import { deleteCategoryService } from '../../services/admin/deleteCategoryService.js';

export const createCategory = async (req, res) => {
  const response = await createCategoryService(req);

  return res.status(response.status).json(response.message);
};

export const editCategory = async (req, res) => {
  const response = await editCategoryService(req);

  return res.status(response.status).json(response.message);
};

export const deleteCategory = async (req, res) => {
  const response = await deleteCategoryService(req);

  return res.status(response.status).json(response.message);
};
