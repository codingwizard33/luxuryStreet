import express from 'express';

import {
  addItemToCart,
  removeItemFromCart
} from '../controllers/cartController.js';
import { getCategories } from '../controllers/categoryController.js';

const router = express.Router();

router.put('/add-to-cart', addItemToCart);
router.delete('/remove-from-cart', removeItemFromCart);
router.get('/categories', getCategories);

export default router;
