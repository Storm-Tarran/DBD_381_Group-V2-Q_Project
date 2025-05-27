//Here we will put in sample categories to seed the database
require('dotenv').config();
const Categories = require('../models/categories');

//Some predefined categories to seed the database, this is so it is easier to update, delete, view and add new categories
const predefinedCategories = [
  { name: 'Electronics', description: 'Devices and gadgets' },
  { name: 'Books', description: 'Literature and educational materials' },
  { name: 'Clothing', description: 'Apparel and fashion items' },
  { name: 'Home & Kitchen', description: 'Household items and kitchenware' },
  { name: 'Sports & Outdoors', description: 'Sporting goods and outdoor equipment' },
  { name: 'Toys & Games', description: 'Children\'s toys and games' },
  { name: 'Health & Beauty', description: 'Personal care products' },
  { name: 'Automotive', description: 'Car accessories and parts' }
];

async function seedCategories() {
  await Categories.deleteMany({}); // Clear existing categories

  //Insert into databse
  await Categories.insertMany(predefinedCategories);
  console.log(`✅ Seeded ${predefinedCategories.length} categories`);
}

module.exports = seedCategories;