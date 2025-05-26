//Here are sample products to seed the database with
const connectDB = require('../connect');
const Products = require('../models/products');

// Sample data to seed the database
const {randProductName, randProductDescription, randNumber, randProductCategory, randImg} = require('@ngneat/falso');

//Wait for connection to the database to be established
async function seedProducts() {
    await Products.deleteMany({}); // Clear existing products

    // Generate 50 sample products
    const productNames = new Set();
    while (productNames.size < 50) {
        productNames.add(randProductName());
    }
    const sampleProducts = Array.from(productNames).map(name => ({
        name,
        description: randProductDescription(),
        price: randNumber({ min: 1, max: 100 }),
        category: randProductCategory(),
        stock: randNumber({ min: 0, max: 100 }),
        image: randImg({ width: 150, height: 150 }) // Random image
    }));

    // Insert the sample products into the database
    
    await Products.insertMany(sampleProducts);

    console.log(`✅ Seeded ${sampleProducts.length} products`);
    
}
module.exports = seedProducts;