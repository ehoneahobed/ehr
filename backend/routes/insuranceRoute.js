const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insuranceController');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');

// Create a new insurance record
router.post('/', verifyTokenAndAuthorization, insuranceController.createInsurance);

// Get a list of all insurance records for a user
router.get('/', verifyTokenAndAuthorization, insuranceController.getAllInsurance);

// Get a single insurance record for a user
router.get('/:insuranceId', verifyTokenAndAuthorization, insuranceController.getInsurance);


// Update an insurance record
router.put('/:insuranceId', verifyTokenAndAuthorization, insuranceController.updateInsurance);

// Delete an insurance record
router.delete('/:insuranceId', verifyTokenAndAuthorization, insuranceController.deleteInsurance);

module.exports = router;
