import Product from '../../models/Product.js';

export const createProductService = async (req) => {
  const { name, price, categoryId, parameters: [] } = req.body;

  try {
    await Product.create({
      name,
      price,
      categoryId,
      parameters: []
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
};
