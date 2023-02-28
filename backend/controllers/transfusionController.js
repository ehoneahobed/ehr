const Transfusion = require('../models/transfusionModel');
const User = require('../models/userModel');

// Create a new transfusion
const createTransfusion = async (req, res) => {
  try {
    const transfusion = new Transfusion({
      user: req.user.id,
      date: req.body.date,
      location: req.body.location,
      blood_type: req.body.blood_type,
      volume: req.body.volume,
      transfusion_reason: req.body.transfusion_reason,
      transfusion_source: req.body.transfusion_source,
      notes: req.body.notes,
    });

    const savedTransfusion = await transfusion.save();

    // once transfusion is created, let's add ID to the user profile
    const user = await User.findById(req.user.id);
    user.transfusions.push(savedTransfusion._id);
    await user.save();

    res.status(201).json(savedTransfusion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all transfusions for a user
const getAllTransfusions = async (req, res) => {
  try {
    const transfusions = await Transfusion.find({ user: req.user.id });
    res.json(transfusions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single transfusion
const getSingleTransfusion = async (req, res) => {
  try {
    const transfusion = await Transfusion.findById(req.params.id);
    if (transfusion == null) {
      return res.status(404).json({ message: 'Transfusion not found' });
    }
    res.json(transfusion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a transfusion
const updateTransfusion = async (req, res) => {
  try {
    const transfusion = await Transfusion.findById(req.params.id);
    if (transfusion == null) {
      return res.status(404).json({ message: 'Transfusion not found' });
    }

    transfusion.date = req.body.date || transfusion.date;
    transfusion.location = req.body.location || transfusion.location;
    transfusion.blood_type = req.body.blood_type || transfusion.blood_type;
    transfusion.volume = req.body.volume || transfusion.volume;
    transfusion.transfusion_reason = req.body.transfusion_reason || transfusion.transfusion_reason;
    transfusion.transfusion_source = req.body.transfusion_source || transfusion.transfusion_source;
    transfusion.notes = req.body.notes || transfusion.notes;

    const updatedTransfusion = await transfusion.save();
    res.json(updatedTransfusion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a transfusion
const deleteTransfusion = async (req, res) => {
  try {
    const transfusion = await Transfusion.findById(req.params.id);
    if (transfusion == null) {
      return res.status(404).json({ message: 'Transfusion not found' });
    }

    await transfusion.remove();
    res.json({ message: 'Transfusion deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTransfusion,
  getAllTransfusions,
  getSingleTransfusion,
  updateTransfusion,
  deleteTransfusion,
};
