//Here are sample orders to seed the database with
require('dotenv').config();
const connectDB = require('../connect');
const Order = require('../models/orders');   
const User = require('../models/users');
const Product = require('../models/products');
const { randNumber, randPastDate } = require('@ngneat/falso');

async function seedOrders() {
  // 1) Clear existing orders
  await Order.deleteMany({});

  // 2) Load all users and products (capture price for total)
  const users = await User.find().select('_id');
  const products = await Product.find().select('_id price');

  // 3) Build 50 sample orders
  const sampleOrders = Array.from({ length: 50 }).map(() => {
    const userObj = users[Math.floor(Math.random() * users.length)];
    const prodObj = products[Math.floor(Math.random() * products.length)];
    const quantity = randNumber({ min: 1, max: 10 });
    const totalPrice = prodObj.price * quantity;

    return {
      user: userObj._id,
      product: prodObj._id,
      quantity,
      totalPrice,
      status:'Pending',
      dateOrdered: randPastDate()
    };
  });

  //Insert the sample orders into the database
  await Order.insertMany(sampleOrders);

  console.log(`✅ Seeded ${sampleOrders.length} orders`);
  
}
module.exports = seedOrders;
