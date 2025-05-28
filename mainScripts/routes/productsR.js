const express = require('express');
const router = express.Router();

const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productsC');

// Route to get all products
router.get('/', getProducts);

// Route to get a specific product by ID
router.get('/:id', getProductById);

// Route to create a new product
router.post('/', createProduct);

// Route to update an existing product by ID
router.put('/:id', updateProduct);

// Route to delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;