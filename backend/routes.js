const express = require('express');
const router = express.Router();

// Import route handlers
const allergyRoutes = require('./routes/allergyRoutes');
const beliefRoutes = require('./routes/beliefRoute');
const conditionRoutes = require('./routes/conditionRoute');
const emergencyContactRoutes = require('./routes/emergencycontactRoute');
const insuranceRoutes = require('./routes/insuranceRoute');
const transfusionRoutes = require('./routes/transfusionRoute');
const vaccinationRoutes = require('./routes/vaccinationRoutes');
const userRoutes = require('./routes/userRoute');

// Use route handlers
router.use('/api/allergies', allergyRoutes);
router.use('/api/beliefs', beliefRoutes);
router.use('/api/conditions', conditionRoutes);
router.use('/api/emergency-contacts', emergencyContactRoutes);
router.use('/api/insurance', insuranceRoutes);
router.use('/api/transfusion', transfusionRoutes);
router.use('/api/vaccinations', vaccinationRoutes);
router.use('/api/users', userRoutes);

module.exports = router;
