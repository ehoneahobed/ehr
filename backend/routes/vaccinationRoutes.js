const express = require('express');
const router = express.Router();
const vaccinationController = require('../controllers/vaccinationController');

// Create a new vaccination record
router.post('/', vaccinationController.createVaccination);

// Get all vaccination records for a user
router.get('/user/:userId', vaccinationController.getVaccinations);

// Get a single vaccination record by ID
router.get('/:vaccinationId', vaccinationController.getVaccinationById);

// Update a vaccination record by ID
router.put('/:vaccinationId', vaccinationController.updateVaccination);

// Delete a vaccination record by ID
router.delete('/:vaccinationId', vaccinationController.deleteVaccination);

module.exports = router;
