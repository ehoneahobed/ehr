const express = require('express');
const router = express.Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');
const {
  getAllAllergiesForUser,
  getSpecificAllergyForUser,
  createAllergyForUser,
  updateSpecificAllergyForUser,
  deleteSpecificAllergyForUser
} = require('../controllers/allergyController');

// Get all allergies for a given user
router.get('/', verifyTokenAndAuthorization, getAllAllergiesForUser);

// Get a specific allergy for a given user
router.get('/:allergyId', verifyTokenAndAuthorization, getSpecificAllergyForUser);

// Create a new allergy for a given user
router.post('/', verifyTokenAndAuthorization, createAllergyForUser);

// Update a specific allergy for a given user
router.patch('/:allergyId', verifyTokenAndAuthorization, updateSpecificAllergyForUser);

// Delete a specific allergy for a given user
router.delete('/:allergyId', verifyTokenAndAuthorization, deleteSpecificAllergyForUser);

module.exports = router;
