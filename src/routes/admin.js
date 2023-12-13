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
import {
  createSize,
  deleteSize,
  updateSize,
} from '../controllers/admin/sizeController.js';
import {
  createColor,
  deleteColor,
  updateColor
} from '../controllers/admin/colorController.js';

const router = express.Router();

router.post('/category', createCategory);
router.put('/category', updateCategory);
router.delete('/category', deleteCategory);

router.post('/product', createProduct);
router.put('/product', updateProduct);
router.delete('/product', deleteProduct);

router.post('/size', createSize);
router.put('/size', updateSize);
router.delete('/size', deleteSize);

router.post('/color', createColor);
router.put('/color', updateColor);
router.delete('/color', deleteColor);

export default router;
