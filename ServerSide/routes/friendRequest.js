const express = require('express');
const router = express.Router();
const { sendFriendRequest, acceptFriendRequest, rejectFriendRequest } = require('../controller/friendRequest'); // Make sure this import path is correct

// Define the routes
router.post('/send', sendFriendRequest); // Send a friend request
router.post('/accept', acceptFriendRequest); // Accept a friend request
router.post('/reject', rejectFriendRequest); // Reject a friend request

module.exports = router;
