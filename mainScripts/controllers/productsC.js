const mongoose = require('mongoose');
const Products = require('../models/products');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
// Get product by ID
exports.getProductById = async (req, res) => {
  const id = req.params.id;

  // Validate format
  //Error handling for invalid ObjectId format, because errors are hard...
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid product ID format' });
  }
  try {
    const product = await Products.findById(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
    } catch (err) {
    console.error('Error fetching product by ID:', err);
    res.status(500).json({ error: 'Failed to fetch product' });
}
};
// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Products(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

