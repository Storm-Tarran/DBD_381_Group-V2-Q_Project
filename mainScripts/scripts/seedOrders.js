//Here are sample orders to seed the database with
require('dotenv').config();
const Order = require('../models/orders');   
const User = require('../models/users');
const Product = require('../models/products');
const { randNumber, randPastDate, randAddress } = require('@ngneat/falso');

async function seedOrders() {
  // 1) Clear existing orders
  await Order.deleteMany({});

  // 2) Load all users and products (capture price for total)
  const users = await User.find().select('_id');
  const products = await Product.find().select('_id price');

  // 3) Build 50 sample orders
  const sampleOrders = Array.from({ length: 10 }).map(() => {
    const userObj = users[Math.floor(Math.random() * users.length)];
    const prodObj = products[Math.floor(Math.random() * products.length)];
    const quantity = randNumber({ min: 1, max: 10 });
    const totalPrice = prodObj.price * quantity;
    const shippingAddress = randAddress();
    const orderedItems = [{
      product: prodObj._id,
      quantity,
      totalPrice
    }];
    const paymentMethod = 'Credit Card'; // Default payment method
    const paymentStatus = 'Paid'; // Default payment status

    return {
      user: userObj._id,
      orderedItems,
      status:'Pending',
      shippingAddress,
      dateOrdered: randPastDate(),
      paymentMethod,
      paymentStatus
    };
  });

  //Insert the sample orders into the database
  await Order.insertMany(sampleOrders);

  console.log(`✅ Seeded ${sampleOrders.length} orders`);
  
}
module.exports = seedOrders;
