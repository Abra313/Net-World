const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  friends: [{ type: String }], // Array of friend user IDs
});

module.exports = mongoose.model('Friend', friendSchema);
