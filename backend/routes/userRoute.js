const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserProfile, updateUserProfile, deleteUser } = require('../controllers/userController');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');

// Create user
router.post('/', createUser);

// Login user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', verifyTokenAndAuthorization, getUserProfile);

// Update user profile
router.put('/profile', verifyTokenAndAuthorization, updateUserProfile);

// Delete user
router.delete('/profile', verifyTokenAndAuthorization, deleteUser);

module.exports = router;
