const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insuranceController');

// Create a new insurance record
router.post('/:userId/insurance', insuranceController.createInsurance);

// Get a list of all insurance records for a user
router.get('/:userId/insurance', insuranceController.getInsurance);

// Update an insurance record
router.put('/insurance/:insuranceId', insuranceController.updateInsurance);

// Delete an insurance record
router.delete('/insurance/:insuranceId', insuranceController.deleteInsurance);

module.exports = router;
