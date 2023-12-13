import { createColorService } from '../../services/admin/createColorService.js';
import { updateColorService } from '../../services/admin/updateColorService.js';
import { deleteColorService } from '../../services/admin/deleteColorService.js';

export const createColor = async (req, res) => {
  const response = await createColorService(req);

  return res.status(response.status).json(response.message);
};

export const updateColor = async (req, res) => {
  const response = await updateColorService(req);

  return res.status(response.status).json(response.message);
};

export const deleteColor = async (req, res) => {
  const response = await deleteColorService(req);

  return res.status(response.status).json(response.message);
};
