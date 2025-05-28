//Here are sample products to seed the database with
require('dotenv').config();
const Products = require('../models/products');
const Categories = require('../models/categories');

// Sample data to seed the database
const {randProductName, randNumber, randImg} = require('@ngneat/falso');

//Wait for connection to the database to be established
async function seedProducts() {
    await Products.deleteMany({}); // Clear existing products
    
    // Load all categories to associate with products
    const allCategories = await Categories.find().select('_id name description');

    // Generate 50 sample products
    const productNames = new Set();
    while (productNames.size < 10) {
        productNames.add(randProductName());
    }
    const sampleProducts = Array.from(productNames).map(name => {
        const randomeCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
        return {
            name,
            price: randNumber({ min: 10, max: 500 }),
            category: [{
                categoryId: randomeCategory._id,
                categoryName: randomeCategory.name,
                description: randomeCategory.description
            }],
            stock: randNumber({ min: 0, max: 100 }),
            image: randImg()
        };
    });
    // Insert the sample products into the database
    await Products.insertMany(sampleProducts);
    console.log(`✅ Seeded ${sampleProducts.length} products`);
}
module.exports = seedProducts;