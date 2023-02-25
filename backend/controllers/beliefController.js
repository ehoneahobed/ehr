const Belief = require('../models/beliefModel');

// Get all beliefs for a user
exports.getAllBeliefs = async (req, res) => {
  try {
    const userId = req.params.userId;
    const beliefs = await Belief.find({ user: userId });
    res.status(200).json(beliefs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single belief for a user
exports.getBelief = async (req, res) => {
  try {
    const userId = req.params.userId;
    const beliefId = req.params.beliefId;
    const belief = await Belief.findOne({ _id: beliefId, user: userId });
    if (!belief) {
      return res.status(404).json({ message: 'Belief not found' });
    }
    res.status(200).json(belief);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new belief
exports.createBelief = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { name, religion } = req.body;
    const belief = await Belief.create({ user: userId, name, religion });
    res.status(201).json(belief);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an existing belief
exports.updateBelief = async (req, res) => {
  try {
    const userId = req.params.userId;
    const beliefId = req.params.beliefId;
    const { name, religion } = req.body;
    const belief = await Belief.findOneAndUpdate(
      { _id: beliefId, user: userId },
      { name, religion },
      { new: true }
    );
    if (!belief) {
      return res.status(404).json({ message: 'Belief not found' });
    }
    res.status(200).json(belief);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a belief
exports.deleteBelief = async (req, res) => {
  try {
    const userId = req.params.userId;
    const beliefId = req.params.beliefId;
    const belief = await Belief.findOneAndDelete({ _id: beliefId, user: userId });
    if (!belief) {
      return res.status(404).json({ message: 'Belief not found' });
    }
    res.status(200).json({ message: 'Belief deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
