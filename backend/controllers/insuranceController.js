const Insurance = require('../models/insuranceModel');
const User = require('../models/userModel');

// Create a new insurance record
exports.createInsurance = async (req, res) => {
  try {
    const insurance = new Insurance(req.body);
    insurance.user = req.user.id
    await insurance.save();

    // once contact is created, let's add ID to the user profile
    const user = await User.findById(req.user.id);
    user.insurances.push(insurance._id);
    await user.save();

    res.status(201).json({ message: 'Insurance record created successfully', insurance });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a list of all insurance records for a user
exports.getAllInsurance = async (req, res) => {
  try {
    const insurance = await Insurance.find({ user: req.user.id });
    res.status(200).json(insurance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get single insurance record
exports.getInsurance = async (req, res) => {
  try {
    const insurance = await Insurance.findById(req.params.insuranceId);
    if (!insurance) {
      return res.status(404).json({ message: 'Emergency contact not found' });
    }
    res.status(200).json(insurance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Update an insurance record
exports.updateInsurance = async (req, res) => {
  try {
    const insurance = await Insurance.findByIdAndUpdate(
      { _id: req.params.insuranceId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!insurance) {
      return res.status(404).json({ error: 'Insurance record not found' });
    }
    res.status(200).json({ message: 'Insurance record updated successfully', insurance });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an insurance record
exports.deleteInsurance = async (req, res) => {
  try {
    const insurance = await Insurance.findByIdAndDelete({ _id: req.params.insuranceId });
    if (!insurance) {
      return res.status(404).json({ error: 'Insurance record not found' });
    }
    res.status(200).json({ message: 'Insurance record deleted successfully', insurance });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
