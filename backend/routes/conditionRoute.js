const express = require('express');
const router = express.Router();

const {
  createCondition,
  getAllConditions,
  getConditionById,
  updateCondition,
  deleteCondition
} = require('../controllers/conditionController');

// /users/:userId/conditions

// Create a new condition
router.post('/', createCondition);

// Get all conditions for a user
router.get('/', getAllConditions);

// Get a single condition for a user
router.get('/:conditionId', getConditionById);

// Update a condition
router.put('/:conditionId', updateCondition);

// Delete a condition
router.delete('/:conditionId', deleteCondition);

module.exports = router;
