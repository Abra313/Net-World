const User = require('../models/usermodel');
const FriendRequest = require('../models/friendRequest'); 

// Send a friend request
exports.sendFriendRequest = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    // Fetch the sender and receiver user details
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender) {
      return res.status(400).json({ message: 'Sender not found' });
    }

    if (!receiver) {
      return res.status(400).json({ message: 'Receiver not found' });
    }

    // Check if the sender and receiver are the same user
    if (senderId === receiverId) {
      return res.status(400).json({ message: 'You cannot send a friend request to yourself' });
    }

    // Prepare the sender's friends with FullName and userId
    const senderFriends = await User.find({
      _id: { $in: sender.friends }
    }).select('FullName'); // Select only FullName of friends

    const senderFriendsList = senderFriends.map(friend => ({
      userId: friend._id,
      FullName: friend.FullName,
    }));

    // Check for mutual friends
    const mutualFriends = sender.friends.filter(friendId => receiver.friends.includes(friendId));

    const mutualFriendsList = await User.find({
      _id: { $in: mutualFriends }
    }).select('FullName');

    const mutualFriendsNames = mutualFriendsList.map(friend => friend.FullName);

    // Create a new friend request document
    const newFriendRequest = new FriendRequest({
      senderId: sender._id,
      receiverId: receiver._id,
      senderUserName: sender.userName,
      senderFullName: sender.FullName, // Add sender's FullName
      senderFriends: senderFriendsList, // Attach the sender's friends with FullNames
      receiverFullName: receiver.FullName, // Add receiver's FullName
      status: 'pending',
      mutualFriends: mutualFriendsNames, // Add mutual friends' names
    });

    // Save the friend request in the database
    await newFriendRequest.save();

    // Update the sender's and receiver's friendRequests arrays
    sender.friendRequests.push(newFriendRequest);
    receiver.friendRequests.push(newFriendRequest);

    // Save the updated users
    await sender.save();
    await receiver.save();

    res.status(200).json({
      message: 'Friend request sent successfully',
      friendRequest: newFriendRequest,
      mutualFriends: mutualFriendsNames, // Return the mutual friends' names
    });
  } catch (err) {
    res.status(500).json({ message: 'Error sending friend request', error: err.message });
  }
};

// Accept a friend request
exports.acceptFriendRequest = async (req, res) => {
  const { friendRequestId } = req.body;

  try {
    // Find the friend request by ID
    const friendRequest = await FriendRequest.findById(friendRequestId);

    if (!friendRequest) {
      return res.status(404).json({ message: 'Friend request not found' });
    }

    if (friendRequest.status === 'accepted') {
      return res.status(400).json({ message: 'Friend request already accepted' });
    }

    // Update the friend request status to 'accepted'
    friendRequest.status = 'accepted';
    await friendRequest.save();

    // Add each other to the friends list
    const sender = await User.findById(friendRequest.senderId);
    const receiver = await User.findById(friendRequest.receiverId);

    // Add the sender to the receiver's friends list and vice versa
    sender.friends.push(receiver._id);
    receiver.friends.push(sender._id);

    // Save the updated users
    await sender.save();
    await receiver.save();

    res.status(200).json({
      message: 'Friend request accepted',
      friendRequest: friendRequest,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error accepting friend request', error: err.message });
  }
};

// Reject a friend request
exports.rejectFriendRequest = async (req, res) => {
  const { friendRequestId } = req.body;

  try {
    // Find the friend request by ID
    const friendRequest = await FriendRequest.findById(friendRequestId);

    if (!friendRequest) {
      return res.status(404).json({ message: 'Friend request not found' });
    }

    if (friendRequest.status === 'rejected') {
      return res.status(400).json({ message: 'Friend request already rejected' });
    }

    // Update the friend request status to 'rejected'
    friendRequest.status = 'rejected';
    await friendRequest.save();

    res.status(200).json({
      message: 'Friend request rejected',
      friendRequest: friendRequest,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error rejecting friend request', error: err.message });
  }
};
