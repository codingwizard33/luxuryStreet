import { createSizeService } from '../../services/admin/createSizeService.js';
import { updateSizeService } from '../../services/admin/updateSizeService.js';
import { deleteSizeService } from '../../services/admin/deleteSizeService.js';
import { getSizesService } from '../../services/admin/getSizesService.js';

export const createSize = async (req, res) => {
  const response = await createSizeService(req);

  return res.status(response.status).json(response.message);
};

export const updateSize = async (req, res) => {
  const response = await updateSizeService(req);

  return res.status(response.status).json(response.message);
};

export const deleteSize = async (req, res) => {
  const response = await deleteSizeService(req);

  return res.status(response.status).json(response.message);
};

export const getSizes = async (req, res) => {
  const response = await getSizesService();

  return res.status(response.status).json(response.message);
};
