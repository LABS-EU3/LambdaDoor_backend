const express = require('express');
const user = require('./userController');
const validate = require('../middleware/validation');

const router = express.Router();

router.get('/:id', user.getUser);
router.put('/:id', validate.userExists, user.updateName);
router.post('/:id/image', validate.userExists, user.postImage);
router.put(':id/image', validate.userExists, user.updateImage);

module.exports = router;
