import { createColorService } from '../../services/admin/createColorService.js';
import { updateColorService } from '../../services/admin/updateColorService.js';
import { deleteColorService } from '../../services/admin/deleteColorService.js';
import { getColorsService } from '../../services/admin/getColorsService.js';

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

export const getColors = async (req, res) => {
  const response = await getColorsService();

  return res.status(response.status).json(response.message);
}
