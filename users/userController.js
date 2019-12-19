const Users = require('./userModel');

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const updateName = async (req, res, next) => {
  const { fullName } = req.body;
  const { id } = req.params;
  const nameUpdate = { fullName };
  try {
    const updatedUser = await Users.update(id, nameUpdate);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const postImage = async (req, res, next) => {
  const { profilePicture } = req.body;
  const { id } = req.params;
  const image = { profilePicture };
  try {
    const newImage = await Users.addImage(id, image);
    return res.status(200).json(newImage);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const updateImage = async (req, res, next) => {
  const { profilePicture } = req.body;
  const { id } = req.params;
  const imageUpdate = { profilePicture };
  try {
    const updatedImage = await Users.update(id, imageUpdate);
    return res.status(200).json(updatedImage);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getUser,
  updateName,
  postImage,
  updateImage,
};
