const express = require('express');
const user = require('./userController');
const validate = require('../middleware/validation');

const router = express.Router();

router.get('/:id', validate.userExists, user.getUser);
router.put('/:id', validate.userExists, user.updateUser);
router.post('/:id', validate.userExists, user.postImage);

module.exports = router;
