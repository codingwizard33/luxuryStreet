import Category from '../../models/Category.js';

export const updateCategoryService = async (req) => {
  const { _id, name } = req.body;

  try {
    await Category.findByIdAndUpdate(
      _id,
      { $set: { name: name } },
      { new: true }
    );

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
