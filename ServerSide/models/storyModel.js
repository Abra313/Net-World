const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  mediaUrl: { type: String },
  mediaType: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Story', storySchema);
