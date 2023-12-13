import mongoose from 'mongoose';

const SizeSchema = new mongoose.Schema({
  gender: { type: String, required: true },
  sizes: [{
    us: { type: String, required: true },
    de: { type: String, required: true },
    uk: { type: String, required: true },
    fr: { type: String, required: true },
    it: { type: String, required: true },
    es: { type: String, required: true }
  }]
}, { timestamps: true });

export default mongoose.model('Size', SizeSchema);
