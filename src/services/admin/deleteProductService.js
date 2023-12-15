import fs from 'fs';

import Product from '../../models/Product.js';

export const deleteProductService = async (req) => {
  const { _id } = req.body;

  try {
    const product = await Product.findById(_id);

    if (product.images.length > 0) {
      product.images.forEach(filePath => {
        fs.unlink(filePath.path, () => {});
      });
    }

    await product.deleteOne();

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
