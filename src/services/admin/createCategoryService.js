import Category from '../../models/Category.js';

export const createCategoryService = async (req) => {
  const { name } = req.body;
  
  try {
    await Category.create({ name });

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
