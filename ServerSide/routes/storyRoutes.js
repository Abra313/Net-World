const express = require('express');
const multer = require('multer');
const path = require('path');
const { createStory, getActiveStories } = require('../controllers/storyController');
const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  },
});

const upload = multer({ storage });

// Route to upload a new story (protected)
router.post('/upload', upload.single('media'), createStory);

// Route to get active stories
router.get('/', getActiveStories);

module.exports = router;
