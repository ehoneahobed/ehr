const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const allergyRoutes = require('./routes/allergy');
const beliefRoutes = require('./routes/belief');
const conditionRoutes = require('./routes/condition');
const emergencyContactRoutes = require('./routes/emergencyContact');
const insuranceRoutes = require('./routes/insurance');
const vaccinationRoutes = require('./routes/vaccination');
const userRoutes = require('./routes/user');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const dbURI = process.env.MONGODB_STR;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/allergies', allergyRoutes);
app.use('/api/beliefs', beliefRoutes);
app.use('/api/conditions', conditionRoutes);
app.use('/api/emergency-contacts', emergencyContactRoutes);
app.use('/api/insurance', insuranceRoutes);
app.use('/api/vaccinations', vaccinationRoutes);
app.use('/api/users', userRoutes);

// Connect to database
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to database!');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((err) => {
  console.error(err);
});

