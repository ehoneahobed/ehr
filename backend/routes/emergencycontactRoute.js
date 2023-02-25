const express = require('express');
const router = express.Router();
const {
  createEmergencyContact,
  getAllEmergencyContacts,
  getEmergencyContact,
  updateEmergencyContact,
  deleteEmergencyContact
} = require('../controllers/emergencycontactController');

// Create new emergency contact
router.post('/:userId', createEmergencyContact);

// Get all emergency contacts for a specific user
router.get('/:userId', getAllEmergencyContacts);

// Get single emergency contact
router.get('/:contactId', getEmergencyContact);

// Update emergency contact
router.put('/:contactId', updateEmergencyContact);

// Delete emergency contact
router.delete('/:contactId', deleteEmergencyContact);

module.exports = router;
