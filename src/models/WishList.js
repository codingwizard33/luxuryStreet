import mongoose from 'mongoose';

const WishListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  wishList: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    }
  ]
}, { timestamps: true });

export default mongoose.model('WishList', WishListSchema);
