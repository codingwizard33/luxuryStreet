import Product from '../../models/Product.js';

export const deleteProductParameterService = async (req) => {
  const { _id, parameterId } = req.body;

  try {
    await Product.findByIdAndUpdate(
      _id,
      { $pull: { parameters: { _id: parameterId } } },
      { new: true }
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
