import WishList from '../models/WishList.js';

export const createWishListService = async (req) => {
  const { userId, productId } = req.body;

  const wishList = await WishList.find({ userId });

  if (wishList.length === 0) {
    try {
      await WishList.create({
        userId,
        wishList: [
          {
            productId
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
  } else {
    try {
      await WishList.findOneAndUpdate(
        { userId },
        { $push: { wishList: { productId } } }
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
  }
};
