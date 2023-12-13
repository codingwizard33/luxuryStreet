import Color from '../../models/Color.js';

export const createColorService = async (req) => {
  const { color } = req.body;

  try {
    await Color.create({ color });

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
