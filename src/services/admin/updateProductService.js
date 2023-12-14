import Product from '../../models/Product.js';

export const updateProductService = async (req) => {
  const { _id, name, price, categoryId, sizeId, colorId, qty } = req.body;

  try {
    const product = await Product.findById(_id);

    product.name = name;
    product.price = price;
    product.categoryId = categoryId;
    product.parameters[0].size = sizeId;
    product.parameters[0].color = colorId;
    product.parameters[0].qty = qty;

    await product.save();

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
