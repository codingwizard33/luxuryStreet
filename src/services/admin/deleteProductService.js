import Product from '../../models/Product.js';

export const deleteProductService = async (req) => {
  const { _id } = req.body;

  try {
    await Product.findByIdAndDelete(_id);

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
