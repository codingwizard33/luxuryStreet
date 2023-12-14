import Size from '../../models/Size.js';

export const getSizesService = async () => {
  try {
    const sizes = await Size.find();

    return {
      status: 200,
      message: sizes
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
