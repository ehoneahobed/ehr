const express = require('express');
const router = express.Router();
const {
  getAllAllergiesForUser,
  getSpecificAllergyForUser,
  createAllergyForUser,
  updateSpecificAllergyForUser,
  deleteSpecificAllergyForUser
} = require('../controllers/allergyController');

// Get all allergies for a given user
router.get('/', getAllAllergiesForUser);

// Get a specific allergy for a given user
router.get('/:allergyId', getSpecificAllergyForUser);

// Create a new allergy for a given user
router.post('/', createAllergyForUser);

// Update a specific allergy for a given user
router.patch('/:allergyId', updateSpecificAllergyForUser);

// Delete a specific allergy for a given user
router.delete('/:allergyId', deleteSpecificAllergyForUser);

module.exports = router;
