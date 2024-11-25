const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbconns');
const authRoutes = require('./routes/userAuth');
const storyRoutes = require('./routes/storyRoutes'); // Import story routes
const cors = require('cors');
const { authenticate } = require('./middleware/authMiddleware'); // Authentication middleware
const { startCronJobs } = require('./utils/cronJobs'); // Import cron jobs for story expiration

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: '*' // Allow all origins (you can restrict this in production)
}));

app.use(express.json()); // Middleware to parse incoming JSON

// Routes
app.use('/api/V1/auth', authRoutes); // Authentication routes
app.use('/api/V1/stories', authenticate, storyRoutes); // Story routes, protected by authentication middleware

// Start cron jobs (for automatic story expiration)
startCronJobs();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
