import express from 'express';

import {
  createCategory,
  deleteCategory,
  editCategory
} from '../controllers/admin/categoryController.js';

const router = express.Router();

router.post('/category', createCategory);
router.put('/category', editCategory);
router.delete('/category', deleteCategory);

export default router;
