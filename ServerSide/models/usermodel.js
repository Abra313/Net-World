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
  posts: [postSchema],
  lastLogin: { type: Date },
  lastLogout: { type: Date },
});

// Static method for search
userSchema.statics.searchUsers = async function (query, page = 1, limit = 10) {
  const skip = (page - 1) * limit;

  // Perform search based on username or full name
  const users = await this.find({
    $or: [
      { userName: { $regex: query, $options: 'i' } },
      { FullName: { $regex: query, $options: 'i' } },
    ],
  })
    .skip(skip)
    .limit(limit);

  // Return search results
  return users;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
