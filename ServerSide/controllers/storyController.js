const Story = require('../models/schema/Story');

// Controller to create a new story
const createStory = async (req, res) => {
  const { mediaType } = req.body; // Media type (image/video)
  const mediaUrl = `/uploads/${req.file.filename}`; // Path to the uploaded file

  try {
    const newStory = new Story({
      userId: req.user.id, // Get user ID from the authenticated request
      mediaUrl,
      mediaType,
    });

    await newStory.save();
    res.status(200).json({ message: 'Story posted successfully', story: newStory });
  } catch (error) {
    res.status(500).json({ message: 'Error posting story', error });
  }
};

// Controller to get active stories
const getActiveStories = async (req, res) => {
  try {
    const activeStories = await Story.find({}).sort({ createdAt: -1 });
    res.status(200).json({ stories: activeStories });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving stories', error });
  }
};

module.exports = { createStory, getActiveStories };
