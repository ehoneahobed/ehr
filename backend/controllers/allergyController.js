const Allergy = require("../models/allergyModel");
const User = require('../models/userModel');

// Get all allergies for a given user
const getAllAllergiesForUser = async (req, res) => {
  try {
    const allergies = await Allergy.find({ user: req.user.id });
    res.status(200).json(allergies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific allergy for a given user
const getSpecificAllergyForUser = async (req, res) => {
  try {
    const allergy = await Allergy.findOne({ _id: req.params.allergyId, user: req.user.id });
    if (!allergy) {
      return res.status(404).json({ message: 'Allergy not found' });
    }
    res.status(200).json(allergy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new allergy for a given user
const createAllergyForUser = async (req, res) => {
  const allergy = new Allergy({
    user: req.user.id,
    name: req.body.name,
    description: req.body.description
  });

  try {
    const newAllergy = await allergy.save();

    // once allergy is created, let's add ID to the user profile
    const user = await User.findById(req.user.id);
    user.allergies.push(newAllergy._id);

    await user.save();


    res.status(201).json(newAllergy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a specific allergy for a given user
const updateSpecificAllergyForUser = async (req, res) => {
  try {
    const allergy = await Allergy.findOne({ _id: req.params.allergyId, user: req.user.id });
    if (!allergy) {
      return res.status(404).json({ message: 'Allergy not found' });
    }

    allergy.name = req.body.name;
    allergy.description = req.body.description;

    const updatedAllergy = await allergy.save();
    res.status(200).json(updatedAllergy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a specific allergy for a given user
const deleteSpecificAllergyForUser = async (req, res) => {
  try {
    const allergy = await Allergy.findOne({ _id: req.params.allergyId, user: req.user.id });
    if (!allergy) {
      return res.status(404).json({ message: 'Allergy not found' });
    }

    await allergy.remove();
    res.status(200).json({ message: 'Allergy deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllAllergiesForUser,
  getSpecificAllergyForUser,
  createAllergyForUser,
  updateSpecificAllergyForUser,
  deleteSpecificAllergyForUser,
};
