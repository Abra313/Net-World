const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  time: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
});

const notificationSchema = new mongoose.Schema({
  type: { type: String, enum: ['message', 'friend_request', 'activity'], required: true },
  content: { type: String },
  time: { type: Date, default: Date.now },
  seen: { type: Boolean, default: false },
});

const postSchema = new mongoose.Schema({
  content: { type: String, required: true },
  time: { type: Date, default: Date.now },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comment: { type: String },
      time: { type: Date, default: Date.now },
    },
  ],
});

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9.\-@_!]+$/, // Updated regex to allow ., -, @, _, and !
    minlength: 3,
  },
  FullName: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9\s]+$/, // Allow spaces in full names
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  age: {
    type: Number,
    required: true,
    min: 8,
  },
  profilePicture: { type: String, default: '' },
  messages: [messageSchema],
  notifications: [notificationSchema],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  friendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FriendRequest' }],
  posts: [postSchema],
  lastLogin: { type: Date },
  lastLogout: { type: Date },
});

// Static method to search users by userName or FullName
userSchema.statics.searchUsers = async function(query) {
  try {
    return await this.find({
      $or: [
        { userName: { $regex: query, $options: 'i' } }, // Case-insensitive search for userName
        { FullName: { $regex: query, $options: 'i' } }, // Case-insensitive search for FullName
      ],
    }).limit(10); // Limit results to 10 users
  } catch (err) {
    throw new Error('Error searching users');
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
