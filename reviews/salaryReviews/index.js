const express = require('express');
const reviews = require('./salaryReviewController');
const validate = require('../../middleware/validation');

const router = express.Router();
router.post('/:id', validate.userExists, reviews.addUseSalaryrReview);
router.delete('/:id', validate.userExists, reviews.deleteUserSalaryReview);
router.patch('/:id', validate.userExists, reviews.updateUserSalaryrReview);
router.get('/user/:id', validate.userExists, reviews.getUserSalaryReviews);
router.get('/:id', validate.userExists, reviews.findUserSalaryReviewById);
router.get('/reviews/:id', reviews.getSalaryReviewsByCompany);

module.exports = router;
