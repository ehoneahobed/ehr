const EmergencyContact = require('../models/emergencycontactModel');

// Create new emergency contact
exports.createEmergencyContact = async (req, res) => {
  try {
    const emergencyContact = new EmergencyContact(req.body);
    emergencyContact.user = req.params.userId;
    await emergencyContact.save();
    res.status(201).json(emergencyContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all emergency contacts for a specific user
exports.getAllEmergencyContacts = async (req, res) => {
  try {
    const emergencyContacts = await EmergencyContact.find({
      user: req.params.userId
    });
    res.status(200).json(emergencyContacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single emergency contact
exports.getEmergencyContact = async (req, res) => {
  try {
    const emergencyContact = await EmergencyContact.findById(req.params.contactId);
    if (!emergencyContact) {
      return res.status(404).json({ message: 'Emergency contact not found' });
    }
    res.status(200).json(emergencyContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update emergency contact
exports.updateEmergencyContact = async (req, res) => {
  try {
    const updatedContact = await EmergencyContact.findByIdAndUpdate(req.params.contactId, req.body, {
      new: true
    });
    if (!updatedContact) {
      return res.status(404).json({ message: 'Emergency contact not found' });
    }
    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete emergency contact
exports.deleteEmergencyContact = async (req, res) => {
  try {
    const deletedContact = await EmergencyContact.findByIdAndDelete(req.params.contactId);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Emergency contact not found' });
    }
    res.status(200).json({ message: 'Emergency contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
