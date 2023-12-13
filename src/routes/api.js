import express from 'express';

import {
  addItemToCart,
  removeItemFromCart
} from '../controllers/cartController.js';
import { getCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.put('/add-to-cart', addItemToCart);
router.delete('/remove-from-cart', removeItemFromCart);
router.get('/category', getCategory);

export default router;
