const express = require('express');
const router = express.Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');

const {
  createCondition,
  getAllConditions,
  getConditionById,
  updateCondition,
  deleteCondition
} = require('../controllers/conditionController');

// /users/:userId/conditions

// Create a new condition
router.post('/', verifyTokenAndAuthorization, createCondition);

// Get all conditions for a user
router.get('/', verifyTokenAndAuthorization, getAllConditions);

// Get a single condition for a user
router.get('/:conditionId', verifyTokenAndAuthorization, getConditionById);

// Update a condition
router.put('/:conditionId', verifyTokenAndAuthorization, updateCondition);

// Delete a condition
router.delete('/:conditionId', verifyTokenAndAuthorization, deleteCondition);

module.exports = router;
