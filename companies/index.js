const express = require('express');
const company = require('./companyController');

const router = express.Router();

router.get('/', company.getCompanies);
router.get('/top', company.getTopRated);

module.exports = router;
