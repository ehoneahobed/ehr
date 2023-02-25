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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Insurance', insuranceSchema);
