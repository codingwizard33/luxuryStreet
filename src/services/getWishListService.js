import WishList from '../models/WishList.js';

export const getWishListService = async (req) => {
  const { userId } = req.body;

  try {
    const wishList = await WishList.findOne({ userId });

    return {
      status: 200,
      message: wishList
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
