const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserProfile, updateUserProfile, deleteUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

// Create user
router.post('/', createUser);

// Login user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', auth, getUserProfile);

// Update user profile
router.put('/profile', auth, updateUserProfile);

// Delete user
router.delete('/profile', auth, deleteUser);

module.exports = router;
