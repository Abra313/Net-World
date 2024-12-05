const express = require('express');
const router = express.Router();
const friendController = require('../controller/friendRequest');

// Send a friend request
router.post('/send', friendController.sendFriendRequest);
// Accept a friend request
router.post('/accept', friendController.acceptFriendRequest);
// Reject a friend request
router.post('/reject', friendController.rejectFriendRequest);
// Get pending requests and friends list
router.get('/:userId', friendController.getFriendRequestsAndFriends);

module.exports = router;
