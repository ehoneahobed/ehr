
// Importing the controller functions
const {
    createTransfusion,
    getAllTransfusions,
    getSingleTransfusion,
    updateTransfusion,
    deleteTransfusion,
    } = require('../controllers/transfusionController');
    
    // Creating the transfusion router
    const express = require('express');
    const router = express.Router();
    
    // Defining the routes for the transfusion controller
    router.post('/', createTransfusion);
    router.get('/user/:userId', getAllTransfusions);
    router.get('/:id', getSingleTransfusion);
    router.put('/:id', updateTransfusion);
    router.delete('/:id', deleteTransfusion);
    
    // Exporting the router
    module.exports = router;