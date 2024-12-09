const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const connectDB = require('./Config/dbconns');
const authRoutes = require('./routes/userAuth');
const userRoutes = require('./routes/userAuth');  // Import the userRoutes for searching users
const friendRequestRouter = require('./routes/friendRequest');
const storyRoutes = require('./routes/storyRoutes');  // Add the story routes

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Enable CORS (Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow only the frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow cookies and authorization headers
  })
);

// Middleware to parse cookies
app.use(cookieParser());

// Log requests in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Secure HTTP headers
app.use(helmet());

// Compress responses for better performance
app.use(compression());

// Set up rate limiting (limit requests per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per 15 minutes
});
// app.use(limiter);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Authentication routes
app.use('/api/V1/auth', authRoutes);
app.use('/api/V1/friend-requests', friendRequestRouter);  // Use the friend request routes
app.use('/api/V1/users', userRoutes);  // Use the userRoutes for search

// Story routes
app.use('/api/V1/stories', storyRoutes); // Add story routes

// Default 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler middleware (catches errors from any route or middleware)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    details: err.details || null,
  });
});

// Start the server and listen on the configured port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
