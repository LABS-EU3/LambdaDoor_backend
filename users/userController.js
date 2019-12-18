const Users = require('./userModel');

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(new Error(error));
  }
};

const updateName = async (req, res, next) => {
  const { fullName } = req.body;
  const { id } = req.params;
  const nameUpdate = { fullName };
  try {
    const updatedUser = await Users.update(id, nameUpdate);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    next(new Error(error));
  }
};

const postImage = async (req, res, next) => {
  const { profilePicture } = req.body;
  const { id } = req.params;
  const image = { profilePicture };
  try {
    const newImage = await Users.addImage(id, image);
    res.status(200).json(newImage);
  } catch (error) {
    next(new Error(error));
  }
};

const updateImage = async (req, res, next) => {
  const { profilePicture } = req.body;
  const { id } = req.params;
  const imageUpdate = { profilePicture };
  try {
    const updatedImage = await Users.update(id, imageUpdate);
    res.status(200).json(updatedImage);
  } catch (error) {
    next(new Error(error));
  }
};

module.exports = {
  getUser,
  updateName,
  postImage,
  updateImage,
};
