import express from 'express';

import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory
} from '../controllers/admin/categoryController.js';
import {
  addProductParameter,
  createProduct,
  deleteProduct,
  deleteProductParameter,
  getProducts,
  updateProduct
} from '../controllers/admin/productController.js';
import {
  createSize,
  deleteSize,
  getSizes,
  updateSize,
} from '../controllers/admin/sizeController.js';
import {
  createColor,
  deleteColor,
  getColors,
  updateColor
} from '../controllers/admin/colorController.js';
import upload from '../helpers/imageUpload.js';

const router = express.Router();

router.post('/category', createCategory);
router.put('/category', updateCategory);
router.delete('/category', deleteCategory);
router.get('/categories', getCategories);

router.post('/product', upload.array('images'), createProduct);
router.put('/product', updateProduct);
router.delete('/product', deleteProduct);
router.get('/products', getProducts);
router.put('/product-parameter', addProductParameter);
router.delete('/product-parameter', deleteProductParameter);

router.post('/size', createSize);
router.put('/size', updateSize);
router.delete('/size', deleteSize);
router.get('/sizes', getSizes);

router.post('/color', createColor);
router.put('/color', updateColor);
router.delete('/color', deleteColor);
router.get('/colors', getColors);

export default router;
