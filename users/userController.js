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

const updateUser = async (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  try {
    const updatedUser = await Users.update(id, changes);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const postImage = async (req, res) => {
  const { profile_picture } = req.body;
  const { id } = req.params;
  const image = { profile_picture };
  try {
    const newImage = await Users.addImage(id, image);
    return res.status(200).json(newImage);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getUser,
  updateUser,
  postImage,
  
};
