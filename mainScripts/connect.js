//MongoDB connection script
require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      retryWrites: true,
      w: 'majority'
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}
console.log('Connecting to:', MONGO_URI);

module.exports = connectDB;