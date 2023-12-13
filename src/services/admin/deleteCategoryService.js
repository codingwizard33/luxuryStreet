import Category from '../../models/Category.js';

export const deleteCategoryService = async (req) => {
  const { _id } = req.body;

  try {
    await Category.findByIdAndDelete(_id);

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
