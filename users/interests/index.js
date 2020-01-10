const express = require('express');
const interest = require('./interestsController');
const validate = require('../../middleware/validation');

const router = express.Router();

router.get('/', interest.getInterests);
router.get('/:id', validate.interestExists, interest.getInterest);

module.exports = router;
