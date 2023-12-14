import Cart from '../models/Cart.js';

export const getCartService = async (req) => {
  const { _id } = req.body;

  try {
    const cart = await Cart.find(
      { userId: _id }
    );

    return {
      status: 200,
      message: cart
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
