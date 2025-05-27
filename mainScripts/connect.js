//MongoDB connection script
require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: 'marketplace_data',
      retryWrites: true,
      w: 'majority'
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}

module.exports = connectDB;