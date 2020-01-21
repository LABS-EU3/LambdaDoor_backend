const Companies = require('./companyModel');

const getCompanies = async (req, res) => {
  try {
    const response = await Companies.getCompanies();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCompany = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const response = await Companies.findCompanyById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getTopRated = async (req, res) => {
  try {
    const response = await Companies.getTopRated();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getClosestCompanies = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Companies.getClosest(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCompanies,
  getTopRated,
  getClosestCompanies,
  getCompany,
};
