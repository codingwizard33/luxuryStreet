import Color from '../models/Color.js';

export const getColorsService = async () => {
  try {
    const colors = await Color.find();
  
    return {
      status: 200,
      message: colors
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
