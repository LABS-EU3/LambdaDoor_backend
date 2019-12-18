const express = require('express');
const Users = require('./userModel');

const router = express.Router();

const { userExists } = require('./userMiddleware');

router.get('/:id', async (req, res, next) => {
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

router.post('/:id/image', userExists, async (req, res, next) => {
  const { profilePicture } = req.body;
  const { id } = req.params;
  const image = { profilePicture };
  try {
    const newImage = await Users.addImage(id, image);
    res.status(200).json(newImage);
  } catch (error) {
    next(new Error(error));
  }
});

router.put(':/id/image', userExists, async (req, res, next) => {
  const { profilePicture } = req.body;
  const { id } = req.params;
  const imageUpdate = { profilePicture };
  try {
    const updatedImage = await Users.update(id, imageUpdate);
    res.status(200).json(updatedImage);
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
