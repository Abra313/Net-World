const mongoose = require('mongoose');

const friendRequestSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  senderUserName: { type: String, required: true },
  senderFullName: { type: String, required: true },
  senderFriends: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    FullName: { type: String, required: true }
  }],
  receiverFullName: { type: String, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  sentAt: { type: Date, default: Date.now },
  mutualFriends: [{ type: String }], // Array to hold mutual friends' names
});

const FriendRequest = mongoose.model('FriendRequest', friendRequestSchema);

module.exports = FriendRequest;
