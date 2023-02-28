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
  description: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Allergy = mongoose.model('Allergy', allergySchema);

module.exports = Allergy;
