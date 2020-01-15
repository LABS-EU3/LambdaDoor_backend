const express = require('express');
const db = require('./dataDisplayController');

const router = express.Router();
router.get('/', db.getJobRoles);

module.exports = router;
