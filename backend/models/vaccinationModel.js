const mongoose = require('mongoose');

const vaccinationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    vaccine_name: {
      type: String,
      required: true,
    },
  
    date_administered: {
      type: Date
    },
    next_dose_date: {
      type: Date,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Vaccination = mongoose.model('Vaccination', vaccinationSchema);

module.exports = Vaccination;
