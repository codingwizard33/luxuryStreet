import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  parameters: [
    {
      size: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Size'
      },
      color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Color'
      },
      qty: { type: Number, required: true }
    }
  ],
  images: [
    {
      path: { type: String }
    }
  ]
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
