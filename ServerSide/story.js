const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const { Dropbox } = require("dropbox");
const fetch = require("node-fetch");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Middleware setup
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // Allow cookies and authorization headers
  })
);

// Dropbox client setup
const dbx = new Dropbox({
  fetch: fetch,
  accessToken: process.env.ACCESS_TOKEN,
});

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Validate file type (only allow images: jpeg, png, gif)
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(file.originalname.toLowerCase());

    if (mimeType && extname) {
      return cb(null, true); // accept the file
    } else {
      return cb(new Error("Only image files are allowed!"), false); // reject the file
    }
  },
});

// MongoDB Schemas
const storySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  mediaUrl: { type: String },
  mediaType: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Story = mongoose.model("Story", storySchema);

const friendSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  friends: [{ type: String }], // Array of friend IDs
});

const Friend = mongoose.model("Friend", friendSchema);

// Helper function to refresh Dropbox access token
async function refreshAccessToken() {
  try {
    const response = await fetch("https://api.dropboxapi.com/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.DROPBOX_REFRESH_TOKEN,
        client_id: process.env.DROPBOX_CLIENT_ID,
        client_secret: process.env.DROPBOX_CLIENT_SECRET,
      }),
    });

    const data = await response.json();
    if (data.access_token) {
      process.env.ACCESS_TOKEN = data.access_token;
      dbx.setAccessToken(data.access_token); // Update Dropbox client
      console.log("Dropbox token refreshed successfully.");
    } else {
      console.error("Failed to refresh Dropbox token:", data);
    }
  } catch (error) {
    console.error("Error refreshing Dropbox token:", error);
  }
}

// Schedule token refresh every hour
setInterval(refreshAccessToken, 60 * 60 * 1000);

// Route to post a story with media
app.post("/story", upload.single("media"), async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const { userId, content } = req.body;
    const media = req.file;

    if (!userId || !content) {
      return res.status(400).json({ error: "UserId and content are required." });
    }

    let mediaUrl = null;
    let mediaType = null;

    if (media) {
      // Ensure file path is unique
      const filePath = `/stories/${Date.now()}_${media.originalname}`;
      
      // Upload file to Dropbox
      const uploadResponse = await dbx.filesUpload({
        path: filePath,
        contents: media.buffer,
      });

      // Create a shared link for the uploaded file
      const sharedLinkResponse = await dbx.sharingCreateSharedLinkWithSettings({
        path: uploadResponse.result.path_display,
      });

      // Replace the Dropbox shared link to serve the media directly
      mediaUrl = sharedLinkResponse.result.url.replace("?dl=0", "?raw=1");
      mediaType = media.mimetype.includes("video") ? "video" : "image"; // Detect media type (if required)
    }

    // Create and save the story in the database
    const story = new Story({ userId, content, mediaUrl, mediaType });
    await story.save();

    res.status(201).json({ message: "Story posted successfully.", story });
  } catch (error) {
    console.error("Error posting story:", error);
    res.status(500).json({ error: error.message || "Internal server error." });
  }
});

// Route to get stories of friends (only last 24 hours)
app.get("/stories/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const friends = await Friend.findOne({ userId });
    if (!friends) {
      return res.status(404).json({ error: "Friends not found." });
    }

    const stories = await Story.find({
      userId: { $in: friends.friends },
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    }).sort({ createdAt: -1 });

    res.status(200).json(stories);
  } catch (error) {
    console.error("Error fetching stories:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
