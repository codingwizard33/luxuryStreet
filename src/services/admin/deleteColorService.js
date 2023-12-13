import Color from '../../models/Color.js';

export const deleteColorService = async (req) => {
  const { _id } = req.body;

  try {
    await Color.findByIdAndDelete(_id);

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
