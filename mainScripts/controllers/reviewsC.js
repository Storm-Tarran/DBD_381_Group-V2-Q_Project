const mongoose = require('mongoose');
const Reviews = require('../models/reviews');

// Get all reviews
exports.getReviews = async (req, res) => {
    try {
        const reviews = await Reviews.find();
        res.status(200).json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ message: "Failed to fetch reviews, SORRY!" });
    }
};

// Get review by ID
exports.getReviewById = async (req, res) => {
    const id = req.params.id;

    // Validate format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid review ID format' });
    }

    try {
        const review = await Reviews.findById(id);
        if (!review) return res.status(404).json({ error: 'Review not found' });
        res.json(review);
    } catch (err) {
        console.error('Error fetching review by ID:', err);
        res.status(500).json({ error: 'Failed to fetch review' });
    }
};

// Create a new review
exports.createReview = async (req, res) => {
    try {
        const newReview = new Reviews(req.body);
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        console.error("Error creating review:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update a review by ID
exports.updateReview = async (req, res) => {
    try {
        const updatedReview = await Reviews.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReview) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(200).json(updatedReview);
    } catch (error) {
        console.error("Error updating review:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
    const id = req.params.id;

    // Validate format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid review ID format' });
    }

    try {
        const deletedReview = await Reviews.findByIdAndDelete(id);
        if (!deletedReview) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        console.error("Error deleting review:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};