const express = require('express');
const router = express.Router();
const { register, login } = require('../controller/user');
const authenticateToken = require('../middlewares/userAuth');

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

module.exports = router;
