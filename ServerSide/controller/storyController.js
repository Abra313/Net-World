const Story = require('../models/storyModel');
const Friend = require('../models/friendModel');
const { uploadToDropbox } = require('../utils/dropbox');

/**
 * Post a new story.
 * @param {Object} req - The request object containing userId, content, and optional media.
 * @param {Object} res - The response object.
 */
exports.postStory = async (req, res) => {
  try {
    const { userId, content } = req.body;
    const media = req.file;  // File received in the request

    if (!userId || !content) {
      return res.status(400).json({ error: 'UserId and content are required.' });
    }

    let mediaUrl = null;
    let mediaType = null;

    if (media) {
      // Generate the file path for Dropbox
      const filePath = `/stories/${Date.now()}_${media.originalname}`;

      // Upload media to Dropbox and get the media URL
      mediaUrl = await uploadToDropbox(filePath, media.buffer);
      mediaType = media.mimetype.includes('video') ? 'video' : 'image';
    }

    // Save the story in the database
    const story = new Story({ userId, content, mediaUrl, mediaType });
    await story.save();

    res.status(201).json({ message: 'Story posted successfully.', story });
  } catch (error) {
    console.error('Error posting story:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

/**
 * Get stories for a user and their friends within the last 24 hours.
 * @param {Object} req - The request object containing the userId parameter.
 * @param {Object} res - The response object.
 */
exports.getStories = async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch the user's friends from the Friend collection
    const friendsData = await Friend.findOne({ userId });
    const friends = friendsData ? friendsData.friends : [];

    // Find stories from the user and their friends within the last 24 hours
    const storyOwners = [userId, ...friends];
    const stories = await Story.find({
      userId: { $in: storyOwners },
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }, // Last 24 hours
    }).sort({ createdAt: -1 });

    // Separate the user's own stories and their friends' stories
    res.status(200).json({
      userStories: stories.filter(story => story.userId === userId),
      friendsStories: stories.filter(story => story.userId !== userId),
    });
  } catch (error) {
    console.error('Error fetching stories:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
