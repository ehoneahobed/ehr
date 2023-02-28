 // Creating the transfusion router
 const express = require('express');
 const router = express.Router();
 const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');

// Importing the controller functions
const {
    createTransfusion,
    getAllTransfusions,
    getSingleTransfusion,
    updateTransfusion,
    deleteTransfusion,
    } = require('../controllers/transfusionController');
     
    // Defining the routes for the transfusion controller
    router.post('/', verifyTokenAndAuthorization, createTransfusion);
    // get all transfusion records for user
    router.get('/', verifyTokenAndAuthorization, getAllTransfusions);
    // get single transfusion record
    router.get('/:id', verifyTokenAndAuthorization, getSingleTransfusion);
    // update transfusion record
    router.put('/:id', updateTransfusion);
    // delete transfusion record
    router.delete('/:id', deleteTransfusion);
    
    // Exporting the router
    module.exports = router;