const mongoose = require('mongoose');

const allergySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  reaction: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Allergy = mongoose.model('Allergy', allergySchema);

module.exports = Allergy;
