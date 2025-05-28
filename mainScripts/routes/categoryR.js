const express = require('express');
const router = express.Router();

const {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoriesC');

// Route to get all categories
router.get('/', getCategories);

// Route to get a specific category by ID
router.get('/:id', getCategoryById);

// Route to create a new category
router.post('/', createCategory);

// Route to update an existing category by ID
router.put('/:id', updateCategory);

// Route to delete a category by ID
router.delete('/:id', deleteCategory);

module.exports = router;