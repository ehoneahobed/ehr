const mongoose = require('mongoose');
const User = require('../models/userModel');

const emergencyContactSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  relationship: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const EmergencyContact = mongoose.model('EmergencyContact', emergencyContactSchema);

module.exports = EmergencyContact;
