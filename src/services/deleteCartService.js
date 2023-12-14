import Cart from '../models/Cart.js';

export const deleteCartService = async (req) => {
  const { userId, _id } = req.body;

  try {
    await Cart.findOneAndUpdate(
      { userId },
      { $pull: { items: { _id } } }
    );

    return {
      status: 202,
      message: 'OK'
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
