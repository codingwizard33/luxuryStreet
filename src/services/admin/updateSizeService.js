import Size from '../../models/Size.js';

export const updateSizeService = async (req) => {
  const { _id, us, de, uk, fr, it, es } = req.body;

  try {
    const size = await Size.findById(_id);
    console.log(size);

    size.sizes[0].us = us;
    size.sizes[0].de = de;
    size.sizes[0].uk = uk;
    size.sizes[0].fr = fr;
    size.sizes[0].it = it;
    size.sizes[0].es = es;

    await size.save();

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
