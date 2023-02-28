const mongoose = require('mongoose');

const transfusionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    date: {
      type: Date
    },
    location: {
      type: String
    },
    blood_type: {
      type: String
    },
    volume: {
      type: String
    },
    transfusion_reason: {
      type: String
    },
    transfusion_source: {
      type: String
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Transfusion = mongoose.model('Transfusion', transfusionSchema);

module.exports = Transfusion;
