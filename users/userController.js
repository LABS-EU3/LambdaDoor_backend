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

const addUser = async (req, res) => {
  try {
    const newUser = {
      full_name: req.body.name,
      username: req.body.name,
      email_address: req.body.email_address,
      profile_picture: req.body.img_72,
      slack_id: req.body.slack_id,
    };

    const existingUser = await Users.findBy(newUser.slack_id);

    if (existingUser) {
      return res.status(200).json(existingUser);
    }
    const user = await Users.insert(newUser);
    return res.status(201).json(user);
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

module.exports = {
  getUser,
  addUser,
  updateUser,
  postImage,
};
