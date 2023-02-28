const express = require('express');
const router = express.Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');
const beliefController = require('../controllers/beliefController');

// Get all beliefs for a specific user
router.get('/', verifyTokenAndAuthorization, beliefController.getAllBeliefs);

// get belief
router.get('/:beliefId', verifyTokenAndAuthorization, beliefController.getBelief);
// create new belief
router.post('/', verifyTokenAndAuthorization, beliefController.createBelief);
// update belief
router.put('/:beliefId', verifyTokenAndAuthorization, beliefController.updateBelief);

// delete belief
router.delete('/:beliefId', verifyTokenAndAuthorization, beliefController.deleteBelief);

module.exports = router;
