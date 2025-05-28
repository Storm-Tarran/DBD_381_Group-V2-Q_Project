const express = require('express');
const router = express.Router();

const {
    getReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
} = require('../controllers/reviewsC');

// Route to get all reviews
router.get('/', getReviews);

// Route to get a specific review by ID
router.get('/:id', getReviewById);

// Route to create a new review
router.post('/', createReview);

// Route to update an existing review by ID
router.put('/:id', updateReview);

// Route to delete a review by ID
router.delete('/:id', deleteReview);

module.exports = router;