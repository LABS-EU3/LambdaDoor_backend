const express = require('express');
const company = require('./companyController');

const router = express.Router();

router.get('/', company.getCompanies);
router.get('/:id', company.getCompany);
router.get('/top', company.getTopRated);
router.get('/:id/closest', company.getClosestCompanies);

module.exports = router;
