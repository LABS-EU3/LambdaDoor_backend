const express = require('express');
const company = require('./companyController');

const router = express.Router();

router.get('/', company.getCompanies);
router.get('/top', company.getTopRated);
router.get('/:id', company.getCompany);
router.get('/:id/closest', company.getClosestCompanies);
router.get('/:id/companyReview', company.getCompanyAndReview);
router.post('/', company.addCompany);

module.exports = router;
