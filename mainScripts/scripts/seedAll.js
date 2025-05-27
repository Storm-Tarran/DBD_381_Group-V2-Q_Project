//This is the file to call, to seed all the data in the database
require('dotenv').config();
const connectDB = require('../connect');
const seedCategories = require('./seedCategories');
const seedProducts = require('./seedProducts');
const seedUsers = require('./seedUsers');
const seedOrders = require('./seedOrders');
const seedReviews = require('./seedReviews');


async function runAll() {
    try {
        await connectDB();

        // Seed each collection in order
        await seedCategories();
        await seedProducts();
        await seedUsers();
        await seedOrders();
        await seedReviews();

        console.log('✅ All data seeded successfully');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error seeding data:', err);
        process.exit(1);
    }
}

runAll();