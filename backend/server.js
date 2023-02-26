const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const allergyRoutes = require('./routes/allergyRoutes');
const beliefRoutes = require('./routes/beliefRoute');
const conditionRoutes = require('./routes/conditionRoute');
const emergencyContactRoutes = require('./routes/emergencycontactRoute');
const insuranceRoutes = require('./routes/insuranceRoute');
const vaccinationRoutes = require('./routes/vaccinationRoutes');
const userRoutes = require('./routes/userRoute');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

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
// mongoose.set('strictQuery', true);
// mongoose.connect(process.env.MONGODB_STR, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).then(() => {
//   console.log('Connected to database!');
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });
// }).catch((err) => {
//   console.error(err);
// });

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_STR).then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Database connected and Backend server is running successfully on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log(error);
})