import Product from '../../models/Product.js';

export const updateProductService = async (req) => {
  const { _id, name, price, categoryId, parameters: [] } = req.body;

  try {
    await Product.findByIdAndUpdate(
      _id,
      {
        $set: {
          name,
          price,
          categoryId,
          parameters: []
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
