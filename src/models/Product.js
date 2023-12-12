import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categoryId: { type: mongoose.Types.ObjectId, required: true },
  parameters: [] // ?
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
