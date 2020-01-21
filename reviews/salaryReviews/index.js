const express = require('express');
const reviews = require('./salaryReviewsController');
const validate = require('../../middleware/validation');

const router = express.Router();
router.get('/', reviews.getSalaryReviews);

module.exports = router;
