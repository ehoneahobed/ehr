const express = require('express');
const router = express.Router();
const vaccinationController = require('../controllers/vaccinationController');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');

// Create a new vaccination record
router.post('/', verifyTokenAndAuthorization, vaccinationController.createVaccination);

// Get all vaccination records for a user
router.get('/', verifyTokenAndAuthorization, vaccinationController.getVaccinations);

// Get a single vaccination record by ID
router.get('/:vaccinationId', verifyTokenAndAuthorization, vaccinationController.getVaccinationById);

// Update a vaccination record by ID
router.put('/:vaccinationId', verifyTokenAndAuthorization, vaccinationController.updateVaccination);

// Delete a vaccination record by ID
router.delete('/:vaccinationId', verifyTokenAndAuthorization, vaccinationController.deleteVaccination);

module.exports = router;
