import Size from '../../models/Size.js';

export const createSizeService = async (req) => {
  const { gender, us, de, uk, fr, it, es } = req.body;

  try {
    await Size.create({
      gender,
      sizes: [
        {
          us, de, uk, fr, it, es
        }
      ]
    });

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
