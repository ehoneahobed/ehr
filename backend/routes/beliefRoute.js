const express = require('express');
const router = express.Router();

const beliefController = require('../controllers/beliefController');

// :userId/beliefs

router.get('/', beliefController.getAllBeliefs);
router.get('/:beliefId', beliefController.getBelief);
router.post('/', beliefController.createBelief);
router.put('/:beliefId', beliefController.updateBelief);
router.delete('/:beliefId', beliefController.deleteBelief);

module.exports = router;
