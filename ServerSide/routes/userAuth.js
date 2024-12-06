const express = require('express');
const { register, login, searchUsers } = require('../controller/user');
const authenticateToken = require('../middlewares/userAuth');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected route for searching users (can remove authentication if public)
router.get('/search',  searchUsers); 

// Protected route (example)
router.get('/protected', authenticateToken, (req, res) => {
  res.status(200).json({
    message: 'Access granted to protected route',
    user: req.user,
  });
});

module.exports = router;
