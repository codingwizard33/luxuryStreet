import express from 'express';

import {
  addItemToCart,
  removeItemFromCart
} from '../controllers/cartController.js';

const router = express.Router();

router.put('/add-to-cart', addItemToCart);
router.delete('/remove-from-cart', removeItemFromCart);

export default router;
