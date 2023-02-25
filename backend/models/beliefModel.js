const mongoose = require('mongoose');

const beliefSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  beliefName: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Belief', beliefSchema);
