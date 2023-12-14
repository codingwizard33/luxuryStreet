import Category from '../models/Category.js';

export const getCategoriesService = async () => {
  try {
    const categories = await Category.find();
  
    return {
      status: 200,
      message: categories
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
