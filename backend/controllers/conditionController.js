const Condition = require('../models/Condition');

// Create a new condition
const createCondition = async (req, res) => {
  const { userId } = req.params;
  const { name, description, treatmentStatus } = req.body;

  try {
    const condition = await Condition.create({
      user: userId,
      name,
      description,
      treatmentStatus
    });
    res.status(201).json({ success: true, data: condition });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all conditions for a user
const getAllConditions = async (req, res) => {
  const { userId } = req.params;

  try {
    const conditions = await Condition.find({ user: userId });
    res.status(200).json({ success: true, data: conditions });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single condition for a user
const getConditionById = async (req, res) => {
  const { userId, conditionId } = req.params;

  try {
    const condition = await Condition.findOne({ _id: conditionId, user: userId });
    if (!condition) {
      return res.status(404).json({ success: false, error: 'Condition not found' });
    }
    res.status(200).json({ success: true, data: condition });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a condition
const updateCondition = async (req, res) => {
  const { userId, conditionId } = req.params;
  const { name, description, treatmentStatus } = req.body;

  try {
    let condition = await Condition.findOne({ _id: conditionId, user: userId });
    if (!condition) {
      return res.status(404).json({ success: false, error: 'Condition not found' });
    }
    condition.name = name || condition.name;
    condition.description = description || condition.description;
    condition.treatmentStatus = treatmentStatus || condition.treatmentStatus;
    await condition.save();
    res.status(200).json({ success: true, data: condition });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a condition
const deleteCondition = async (req, res) => {
  const { userId, conditionId } = req.params;

  try {
    const condition = await Condition.findOne({ _id: conditionId, user: userId });
    if (!condition) {
      return res.status(404).json({ success: false, error: 'Condition not found' });
    }
    await condition.remove();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createCondition,
  getAllConditions,
  getConditionById,
  updateCondition,
  deleteCondition
};
