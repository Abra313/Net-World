// const User = require('../models/usermodel');
// const FriendRequest = require('../models/friendRequest');

// // Send a friend request
// exports.sendFriendRequest = async (req, res) => {
//   const { senderId, receiverId } = req.body;

//   try {
//     if (senderId === receiverId) {
//       return res.status(400).json({ message: 'Cannot send a friend request to yourself' });
//     }

//     const sender = await User.findById(senderId);
//     const receiver = await User.findById(receiverId);

//     if (!sender || !receiver) {
//       return res.status(400).json({ message: 'Invalid sender or receiver' });
//     }

//     // Check if they are already friends
//     if (sender.friends.includes(receiverId)) {
//       return res.status(400).json({ message: 'You are already friends with this user' });
//     }

//     // Check if a friend request already exists
//     const existingRequest = await FriendRequest.findOne({
//       sender: senderId,
//       receiver: receiverId,
//       status: 'pending',
//     });

//     if (existingRequest) {
//       return res.status(400).json({ message: 'Friend request already sent' });
//     }

//     // Calculate mutual friends
//     const mutualFriends = sender.friends.filter((friendId) =>
//       receiver.friends.includes(friendId)
//     );

//     // Create a new friend request
//     const newFriendRequest = new FriendRequest({
//       sender: senderId,
//       receiver: receiverId,
//       status: 'pending',
//       mutualFriends,
//     });

//     await newFriendRequest.save();

//     res.status(200).json({ message: 'Friend request sent successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error sending friend request', error: err.message });
//   }
// };

// // Accept a friend request
// exports.acceptFriendRequest = async (req, res) => {
//   const { friendRequestId } = req.body;

//   try {
//     const friendRequest = await FriendRequest.findById(friendRequestId);

//     if (!friendRequest || friendRequest.status !== 'pending') {
//       return res.status(400).json({ message: 'Invalid or already processed request' });
//     }

//     const { sender, receiver } = friendRequest;

//     // Mark the request as accepted
//     friendRequest.status = 'accepted';
//     await friendRequest.save();

//     // Update both users' friend lists
//     const senderUser = await User.findById(sender);
//     const receiverUser = await User.findById(receiver);

//     if (!senderUser.friends.includes(receiver)) senderUser.friends.push(receiver);
//     if (!receiverUser.friends.includes(sender)) receiverUser.friends.push(sender);

//     await senderUser.save();
//     await receiverUser.save();

//     res.status(200).json({ message: 'Friend request accepted' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error accepting friend request', error: err.message });
//   }
// };

// // Reject a friend request
// exports.rejectFriendRequest = async (req, res) => {
//   const { friendRequestId } = req.body;

//   try {
//     const friendRequest = await FriendRequest.findById(friendRequestId);

//     if (!friendRequest || friendRequest.status !== 'pending') {
//       return res.status(400).json({ message: 'Invalid or already processed request' });
//     }

//     await FriendRequest.findByIdAndDelete(friendRequestId); // Remove the request

//     res.status(200).json({ message: 'Friend request rejected' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error rejecting friend request', error: err.message });
//   }
// };

// // Fetch pending friend requests and friends list
// exports.getFriendRequestsAndFriends = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     // Fetch the user and their friends
//     const user = await User.findById(userId).populate('friends', 'userName FullName'); // Populate friends list

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Fetch pending requests where the user is the receiver
//     const friendRequests = await FriendRequest.find({
//       receiver: userId,
//       status: 'pending',
//     })
//       .populate('sender', 'userName FullName') // Populate sender details
//       .populate('receiver', 'userName FullName'); // Populate receiver details

//     // Return the populated data
//     res.status(200).json({
//       friendRequests: friendRequests.map((req) => ({
//         id: req._id,
//         senderId: req.sender._id,
//         senderName: req.sender.userName,
//         receiverId: req.receiver._id,
//         receiverName: req.receiver.userName,
//         status: req.status,
//         createdAt: req.createdAt,
//       })),
//       friends: user.friends.map((friend) => ({
//         id: friend._id,
//         userName: friend.userName,
//         FullName: friend.FullName,
//       })),
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching data', error: err.message });
//   }
// };


const User = require('../models/usermodel');
const FriendRequest = require('../models/friendRequest');

// Send a friend request
exports.sendFriendRequest = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    if (senderId === receiverId) {
      return res.status(400).json({ message: 'Cannot send a friend request to yourself' });
    }

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(400).json({ message: 'Invalid sender or receiver' });
    }

    // Check if they are already friends
    if (sender.friends.includes(receiverId)) {
      return res.status(400).json({ message: 'You are already friends with this user' });
    }

    // Check if a friend request already exists
    const existingRequest = await FriendRequest.findOne({
      sender: senderId,
      receiver: receiverId,
      status: 'pending',
    });

    if (existingRequest) {
      return res.status(400).json({ message: 'Friend request already sent' });
    }

    // Calculate mutual friends
    const mutualFriends = sender.friends.filter((friendId) =>
      receiver.friends.includes(friendId)
    );

    // Create a new friend request
    const newFriendRequest = new FriendRequest({
      sender: senderId,
      receiver: receiverId,
      senderName: sender.userName, // Add senderName
      receiverName: receiver.userName, // Add receiverName
      status: 'pending',
      mutualFriends,
    });

    await newFriendRequest.save();

    res.status(200).json({ message: 'Friend request sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending friend request', error: err.message });
  }
};



// Fetch pending friend requests and friends list
exports.getFriendRequestsAndFriends = async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch the user and their friends
    const user = await User.findById(userId).populate('friends', 'userName FullName'); // Populate friends list

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch pending requests where the user is the receiver
    const friendRequests = await FriendRequest.find({
      receiver: userId,
      status: 'pending',
    })
      .populate('sender', 'userName FullName') // Populate sender details
      .populate('receiver', 'userName FullName'); // Populate receiver details

    // Return the populated data
    res.status(200).json({
      friendRequests: friendRequests.map((req) => ({
        id: req._id,
        senderId: req.sender._id,
        senderName: req.sender.userName, // Include senderName
        receiverId: req.receiver._id,
        receiverName: req.receiver.userName, // Include receiverName
        status: req.status,
        createdAt: req.createdAt,
      })),
      friends: user.friends.map((friend) => ({
        id: friend._id,
        userName: friend.userName,
        FullName: friend.FullName,
      })),
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data', error: err.message });
  }
};



// Accept a friend request
exports.acceptFriendRequest = async (req, res) => {
  const { friendRequestId } = req.body;

  try {
    const friendRequest = await FriendRequest.findById(friendRequestId);

    if (!friendRequest || friendRequest.status !== 'pending') {
      return res.status(400).json({ message: 'Invalid or already processed request' });
    }

    const { sender, receiver } = friendRequest;

    // Mark the request as accepted
    friendRequest.status = 'accepted';
    await friendRequest.save();

    // Update both users' friend lists
    const senderUser = await User.findById(sender);
    const receiverUser = await User.findById(receiver);

    if (!senderUser.friends.includes(receiver)) senderUser.friends.push(receiver);
    if (!receiverUser.friends.includes(sender)) receiverUser.friends.push(sender);

    await senderUser.save();
    await receiverUser.save();

    res.status(200).json({ message: 'Friend request accepted' });
  } catch (err) {
    res.status(500).json({ message: 'Error accepting friend request', error: err.message });
  }
};



// Reject a friend request
exports.rejectFriendRequest = async (req, res) => {
  const { friendRequestId } = req.body;

  try {
    const friendRequest = await FriendRequest.findById(friendRequestId);

    if (!friendRequest || friendRequest.status !== 'pending') {
      return res.status(400).json({ message: 'Invalid or already processed request' });
    }

    await FriendRequest.findByIdAndDelete(friendRequestId); // Remove the request

    res.status(200).json({ message: 'Friend request rejected' });
  } catch (err) {
    res.status(500).json({ message: 'Error rejecting friend request', error: err.message });
  }
};


