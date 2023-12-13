import Product from '../../models/Product.js';

export const createProductService = async (req) => {
  const { name, price, categoryId, sizeId, colorId, qty } = req.body;

  try {
    await Product.create({
      name,
      price,
      categoryId,
      parameters: [
        {
          size: sizeId,
          color: colorId,
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
};
