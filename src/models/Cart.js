import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, required: true },
  items: [
    {
      itemId: { type: mongoose.Types.ObjectId, required: true }
    }
  ]
}, { timestamps: true });

export default mongoose.model('Cart', CartSchema);
