const mongoose = require('mongoose');

const conditionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  diagnosis_date: {
    type: Date
  },
  treatment_status: {
    type: String,
    enum: ['treated', 'ongoing', 'not started'],
    default: 'not started'
  },
}, {
  timestamps: true,
});

const Condition = mongoose.model('Condition', conditionSchema);

module.exports = Condition;
