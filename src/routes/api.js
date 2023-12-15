import express from 'express';

import {
  createCart,
  deleteCart,
  getCart
} from '../controllers/cartController.js';
import { getCategories } from '../controllers/categoryController.js';
import { getColors } from '../controllers/colorController.js';
import { getSizes } from '../controllers/sizeController.js';
import {
  createWishList,
  deleteWishList,
  getWishList
} from '../controllers/wishlistController.js';

const router = express.Router();

router.post('/cart', createCart);
router.delete('/cart', deleteCart);
router.get('/cart', getCart);

router.get('/categories', getCategories);
router.get('/colors', getColors);
router.get('/sizes', getSizes);

router.post('/wish-list', createWishList);
router.delete('/wish-list', deleteWishList);
router.get('/wish-list', getWishList);

export default router;
