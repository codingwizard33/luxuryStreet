import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const createCartService = async (req) => {
  const { userId, productId, productParameterId, qty } = req.body;

  try {
    const product = await Product.find(
      { _id: productId, 'parameters._id': productParameterId },
      { 'parameters.$': 1 }
    );

    if (product[0].parameters[0].qty < qty)
      return {
        status: 404,
        message: 'There are not enough products'
      };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }

  const cart = await Cart.find({ userId });

  if (cart.length === 0) {
    try {
      await Cart.create({
        userId,
        items: [
          {
            productId,
            productParameterId,
            qty
          }
        ]
      });

      return {
        status: 201,
        message: 'OK'
      };
    } catch (error) {
      return {
        status: 500,
        message: error.message
      };
    }
  } else {
    try {
      await Cart.findOneAndUpdate(
        { userId },
        { $push: 
          {
            items:
            {
              productId,
              productParameterId,
              qty
            }
          }
        }
      );

      return {
        status: 201,
        message: 'OK'
      };
    } catch (error) {
      return {
        status: 500,
        message: error.message
      };
    }
  }
};
