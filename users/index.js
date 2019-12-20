const express = require('express');
const user = require('./userController');
const validate = require('../middleware/validation');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.get('/:id', validate.userExists, user.getUser);
router.post('/', user.addUser);
router.patch('/:id', validate.userExists, user.updateUser);
router.post('/:id', validate.userExists, user.postImage);

module.exports = router;
