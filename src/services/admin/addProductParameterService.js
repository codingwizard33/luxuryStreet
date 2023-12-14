import Product from '../../models/Product.js';

export const addProductParameterService = async (req) => {
  const { _id, sizeId, colorId, qty } = req.body;

  try {
    await Product.findByIdAndUpdate(
      _id,
      { $push:
        { parameters:
          {
            size: sizeId,
            color: colorId,
            qty
          }
        }
      },
      { new: true }
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
};
