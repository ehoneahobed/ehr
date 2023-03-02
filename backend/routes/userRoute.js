const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserDetail, getUserProfile, updateUserProfile, deleteUser } = require('../controllers/userController');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');

// Create user
router.post('/', createUser);

// Login user
router.post('/login', loginUser);

// check authentication
router.get('/check-auth', verifyToken, (req, res) => {
     // if the middleware passes, the user is authenticated, and you can proceed with your logic
     res.status(200).json("User is authenticated!");
});

// Get user profile
router.get('/profile', verifyTokenAndAuthorization, getUserProfile);

// Get detailed user profile
router.get('/detail', verifyTokenAndAuthorization, getUserDetail);

// Update user profile
router.put('/profile', verifyTokenAndAuthorization, updateUserProfile);

// Delete user
router.delete('/profile', verifyTokenAndAuthorization, deleteUser);

module.exports = router;
