//Mongo DB connection logic.
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const User = require('./models/users');
const Product = require('./models/products');
const Order = require('./models/orders');
const Review = require('./models/reviews');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;
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

if(require.main === module) {
  (async () => {
    await connectDB();

    const app = express();
    app.use(express.json());

    // Define routes
    app.get('/', (req, res) => {
      res.send('Welcome to the Marketplace API');
    });

    //Users
    app.get('/users', async (req, res) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    //Products
    app.get('/products', async (req, res) => {
      try {
        const products = await Product.find();
        res.json(products);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    //Orders
    app.get('/orders', async (req, res) => {
      try {
        const orders = await Order.find();
        res.json(orders);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    //Reviews
    app.get('/reviews', async (req, res) => {
      try {
        const reviews = await Review.find();
        res.json(reviews);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
    });
  })();
}


module.exports = connectDB;
