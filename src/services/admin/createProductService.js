import fs from 'fs';

import Product from '../../models/Product.js';

export const createProductService = async (req) => {
  const { name, price, categoryId, sizeId, colorId, qty } = req.body;
  const { files } = req;

  try {
    const product = await Product.create({
      name,
      price,
      categoryId,
      parameters: [
        {
          size: sizeId,
          color: colorId,
          qty
        }
      ],
      images: files.map(file => ({ path: file.path }))
    });

    return {
      status: 201,
      message: 'OK'
    };
  } catch (error) {
    files.forEach(filePath => {
      fs.unlink(filePath.path, () => {});
    });

    return {
      status: 500,
      message: error.message
    };
  }
};
