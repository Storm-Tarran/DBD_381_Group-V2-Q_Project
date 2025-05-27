//Here are the sample reviews to seed the database
require('dotenv').config();
const Review = require('../models/reviews');
const User = require('../models/users');
const Product = require('../models/products');
const { randNumber, randPastDate } = require('@ngneat/falso');

async function seedReviews() {
    await Review.deleteMany({});

    // 2) Load all users and products (capture price for total)
    const users = await User.find().select('_id');
    const products = await Product.find().select('_id');

    // 3) Build 50 sample reviews
    const sampleReviews = Array.from({ length: 50 }).map(() => {
        const userObj = users[Math.floor(Math.random() * users.length)];
        const prodObj = products[Math.floor(Math.random() * products.length)];
        const rating = randNumber({ min: 1, max: 5 });
        let review;
        const dateReviewed = randPastDate();

        if (rating <= 2) {
            review = "Bad experience, very disappointed.";
        } else if (rating <= 3) {
            review = "Average product, could be better.";
        } else {
            review = "Great product, highly recommended.";
        }

        return {
            user: userObj._id,
            product: prodObj._id,
            rating,
            review,
            dateReviewed
        };
    });

    //Insert the sample reviews into the database
    await Review.insertMany(sampleReviews);

    console.log(`✅ Seeded ${sampleReviews.length} reviews`);
}
module.exports = seedReviews;