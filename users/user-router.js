const express = require('express');
const Users = require('./user-model');

const router = express.Router();

const userExists = require('./user-middleware');

router.get('/:id', userExists, async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(new Error(error));
  }
});

router.put('/:id', userExists, async (req, res, next) => {
  const { fullName } = req.body;
  const { id } = req.params;
  const nameUpdate = { fullName };
  try {
    const updatedUser = await Users.update(id, nameUpdate);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
