const express = require('express');
const multer = require('multer');
const { postStory, getStories } = require('../controller/storyController');

const router = express.Router();

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|mp4/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(file.originalname.toLowerCase());

    if (mimeType && extname) {
      return cb(null, true);
    } else {
      return cb(new Error('Only image and video files are allowed!'), false);
    }
  },
});

// Route to post a story
router.post('/', upload.single('media'), postStory);

// Route to get stories for a user and their friends
router.get('/:userId', getStories);

module.exports = router;
