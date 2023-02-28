const express = require('express');
const router = express.Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');

const {
  createEmergencyContact,
  getAllEmergencyContacts,
  getEmergencyContact,
  updateEmergencyContact,
  deleteEmergencyContact
} = require('../controllers/emergencycontactController');

// Create new emergency contact
router.post('/', verifyTokenAndAuthorization, createEmergencyContact);

// Get all emergency contacts for a specific user
router.get('/', verifyTokenAndAuthorization, getAllEmergencyContacts);

// Get single emergency contact
router.get('/:contactId', verifyTokenAndAuthorization, getEmergencyContact);

// Update emergency contact
router.put('/:contactId', verifyTokenAndAuthorization, updateEmergencyContact);

// Delete emergency contact
router.delete('/:contactId', verifyTokenAndAuthorization, deleteEmergencyContact);

module.exports = router;
