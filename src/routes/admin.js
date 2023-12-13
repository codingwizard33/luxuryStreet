import express from 'express';

import {
  createCategory,
  deleteCategory,
  updateCategory
} from '../controllers/admin/categoryController.js';
import {
  createProduct,
  deleteProduct,
  updateProduct
} from '../controllers/admin/productController.js';

const router = express.Router();

router.post('/category', createCategory);
router.put('/category', updateCategory);
router.delete('/category', deleteCategory);
router.post('/product', createProduct);
router.put('/product', updateProduct);
router.delete('/product', deleteProduct);

export default router;
