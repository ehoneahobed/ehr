const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['patient', 'health professional', 'admin']
  },
  name: {
    type: String
  },
  emergencyContacts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EmergencyContact'
  }],
  healthConditions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HealthCondition'
  }],
  insurances: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Insurance'
  }],
  allergies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Allergy'
  }],
  vaccinations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vaccination'
  }],
  transfusions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transfusion'
  }],
  beliefs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Belief'
  }],
  healthData: {
    dateOfBirth: {
      type: Date
    },
    height: {
      type: Number
    },
    weight: {
      type: Number
    },
    sicklingStatus: {
      type: String,
      enum: ['positive', 'negative']
    },
    bloodType: {
      type: String
    },
    g6pdStatus: {
      type: String,
      enum: ['normal', 'deficient']
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
