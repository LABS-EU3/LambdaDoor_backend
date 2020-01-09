const express = require('express');
const company = require('./companyController');

const router = express.Router();

router.get('/companies', company.getCompanies);

module.exports = router;
