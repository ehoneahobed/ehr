const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
  provider: {
    type: String,
    required: true
  },
  policyNumber: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Insurance', insuranceSchema);
