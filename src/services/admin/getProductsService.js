import Product from '../../models/Product.js';

export const getProductsService = async () => {
  try {
    const products = Product.find();

    return {
      status: 200,
      message: products
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
