import mongoose from 'mongoose';

const db = () => {
  mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`DB connected on ${process.env.MONGODB_URL}`);
  })
  .catch((error) => {
    console.error(error.message);
  });
};

export default db;
