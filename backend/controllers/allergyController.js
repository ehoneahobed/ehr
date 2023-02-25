const Allergy = require("../models/allergyModel");

// Get all allergies for a given user
const getAllAllergiesForUser = async (req, res) => {
  try {
    const allergies = await Allergy.find({ user: req.params.userId });
    res.status(200).json(allergies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific allergy for a given user
const getSpecificAllergyForUser = async (req, res) => {
  try {
    const allergy = await Allergy.findOne({ _id: req.params.allergyId, user: req.params.userId });
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
    user: req.params.userId,
    name: req.body.name,
    severity: req.body.severity,
    dateDiagnosed: req.body.dateDiagnosed,
    notes: req.body.notes,
  });

  try {
    const newAllergy = await allergy.save();
    res.status(201).json(newAllergy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a specific allergy for a given user
const updateSpecificAllergyForUser = async (req, res) => {
  try {
    const allergy = await Allergy.findOne({ _id: req.params.allergyId, user: req.params.userId });
    if (!allergy) {
      return res.status(404).json({ message: 'Allergy not found' });
    }

    allergy.name = req.body.name;
    allergy.severity = req.body.severity;
    allergy.dateDiagnosed = req.body.dateDiagnosed;
    allergy.notes = req.body.notes;

    const updatedAllergy = await allergy.save();
    res.status(200).json(updatedAllergy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a specific allergy for a given user
const deleteSpecificAllergyForUser = async (req, res) => {
  try {
    const allergy = await Allergy.findOne({ _id: req.params.allergyId, user: req.params.userId });
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
