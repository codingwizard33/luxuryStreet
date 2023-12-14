import express from 'express';

import {
  createCart,
  deleteCart,
  getCart
} from '../controllers/cartController.js';
import { getCategories } from '../controllers/categoryController.js';

const router = express.Router();

router.post('/cart', createCart);
router.delete('/cart', deleteCart);
router.get('/cart', getCart);

router.get('/categories', getCategories);

export default router;
