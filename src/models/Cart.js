import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      productParameterId: {
        type: mongoose.Schema.Types.ObjectId
      },
      qty: { type: Number, required: true }
    }
  ]
}, { timestamps: true });

export default mongoose.model('Cart', CartSchema);
