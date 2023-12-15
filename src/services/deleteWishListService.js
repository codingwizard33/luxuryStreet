import WishList from '../models/WishList.js';

export const deleteWishListService = async (req) => {
  const { userId, _id } = req.body;

  try {
    await WishList.findOneAndUpdate(
      { userId },
      { $pull: { wishList: { _id } } }
    );

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
