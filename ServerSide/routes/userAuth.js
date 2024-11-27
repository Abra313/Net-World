const express = require('express');
const router = express.Router();
const { register, login } = require('../controller/user');
const authenticateToken = require('../middlewares/userAuth');
const User = require('../models/usermodel');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected route 
router.get('/protected', authenticateToken, (req, res) => {
  res.status(200).json({
    message: 'Access granted to protected route',
    user: req.user,
  });
});

// Search route (protected)
router.get('/search', authenticateToken, async (req, res) => {
  try {
    const searchQuery = req.query.q; // Search query from query parameters
    const page = parseInt(req.query.page) || 1; // Page number
    const limit = parseInt(req.query.limit) || 10; // Results per page
    const skip = (page - 1) * limit;

    if (!searchQuery) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    // Search for users by username or fullName
    const users = await User.find({
      $or: [
        { username: { $regex: searchQuery, $options: 'i' } },
        { fullName: { $regex: searchQuery, $options: 'i' } },
      ],
    })
      .skip(skip)
      .limit(limit);

    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    res.status(200).json({
      users,
      page,
      limit,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
