const express = require('express');
const reviews = require('./reviewsController');
const validate = require('../middleware/validation');

const router = express.Router();

router.get('/user/:id', validate.userExists, reviews.getUserReviews);
router.delete('/:id', validate.reviewExists, reviews.deleteUserReview);
router.put('/:id', validate.reviewExists, reviews.updateUserReview);
router.get('/:id', reviews.findUserReviewById);

module.exports = router;
