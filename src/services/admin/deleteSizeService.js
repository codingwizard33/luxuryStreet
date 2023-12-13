import Size from '../../models/Size.js';

export const deleteSizeService = async (req) => {
  const { _id } = req.body;

  try {
    await Size.findByIdAndDelete(_id);

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
