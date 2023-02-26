const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserProfile, updateUserProfile, deleteUser } = require('../controllers/userController');
const auth = require('../middlewares/auth');

// Create user
router.post('/', createUser);

// Login user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', getUserProfile);

// Update user profile
router.put('/profile', updateUserProfile);

// Delete user
router.delete('/profile',  deleteUser);

module.exports = router;
