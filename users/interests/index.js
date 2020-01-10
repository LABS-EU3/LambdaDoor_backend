const express = require('express');
const interest = require('./interestsController');
const validate = require('../../middleware/validation');

const router = express.Router();

router.get('/', interest.getInterests);

module.exports = router;
