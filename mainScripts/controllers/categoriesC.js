const mongoose = require('mongoose');
const Categories = require('../models/categories');

// Get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: "Failed to fetch categories, SORRY!" });
    }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
    const id = req.params.id;

    // Validate format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid category ID format' });
    }

    try {
        const category = await Categories.findById(id);
        if (!category) return res.status(404).json({ error: 'Category not found' });
        res.json(category);
    } catch (err) {
        console.error('Error fetching category by ID:', err);
        res.status(500).json({ error: 'Failed to fetch category' });
    }
};

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Categories(req.body);
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update a category by ID
exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Categories.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete a category by ID
exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Categories.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};