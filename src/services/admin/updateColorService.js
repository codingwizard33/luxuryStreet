import Color from '../../models/Color.js';

export const updateColorService = async (req) => {
  const { _id, color } = req.body;

  try {
    await Color.findByIdAndUpdate(
      _id,
      { $set: { color } },
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
