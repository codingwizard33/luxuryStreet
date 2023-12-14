import Product from '../../models/Product.js';

export const updateProductService = async (req) => {
  const { _id, parameterId, name, price, categoryId, sizeId, colorId, qty } = req.body;

  try {
    await Product.findOneAndUpdate(
      { _id, 'parameters._id': parameterId },
      { $set:
        {
          name: name,
          price: price,
          categoryId: categoryId,
          'parameters.$.size': sizeId,
          'parameters.$.color': colorId,
          'parameters.$.qty': qty
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
