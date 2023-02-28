const Vaccination = require('../models/vaccinationModel');
const User = require('../models/userModel');

// Create new vaccination record
exports.createVaccination = async (req, res) => {
  try {
    const vaccination = new Vaccination({
      user: req.user.id,
      vaccine_name: req.body.vaccine_name,
      date_administered: req.body.date_administered,
      next_dose_date: req.body.next_dose_date,
      notes: req.body.notes,
    });
    const savedVaccination = await vaccination.save();

    // once vaccination record is created, let's add ID to the user profile
    const user = await User.findById(req.user.id);
    user.vaccinations.push(savedVaccination._id);
    await user.save();

    res.status(201).json(savedVaccination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all vaccination records for a user
exports.getVaccinations = async (req, res) => {
  try {
    const vaccinations = await Vaccination.find({ user: req.user.id });
    res.status(200).json(vaccinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single vaccination record
exports.getVaccinationById = async (req, res) => {
  try {
    const vaccination = await Vaccination.findById(req.params.vaccinationId);
    res.status(200).json(vaccination);
  } catch (err) {
    res.status(404).json({ message: 'Vaccination record not found' });
  }
};

// Update a vaccination record
exports.updateVaccination = async (req, res) => {
  try {
    const updatedVaccination = await Vaccination.findByIdAndUpdate(
      req.params.vaccinationId,
      {
        vaccine_name: req.body.vaccine_name,
        date_administered: req.body.date_administered,
        next_dose_date: req.body.next_dose_date,
        notes: req.body.notes,
      },
      { new: true }
    );
    res.status(200).json(updatedVaccination);
  } catch (err) {
    res.status(404).json({ message: 'Vaccination record not found' });
  }
};

// Delete a vaccination record
exports.deleteVaccination = async (req, res) => {
  try {
    await Vaccination.findByIdAndDelete(req.params.vaccinationId);
    res.status(200).json({ message: 'Vaccination record deleted' });
  } catch (err) {
    res.status(404).json({ message: 'Vaccination record not found' });
  }
};
