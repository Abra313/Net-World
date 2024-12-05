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

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Enable CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow only the frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow cookies and authorization headers
  })
);

// Parse cookies
app.use(cookieParser());

// Log requests in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Secure HTTP headers
app.use(helmet());

// Compress responses
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
// app.use(limiter);

// Middleware for parsing JSON
app.use(express.json());

// Auth routes
app.use('/api/V1/auth', authRoutes);
app.use('/api/V1/friend-requests', friendRequestRouter);  // Use the friend request routes
app.use('/api/V1/users', userRoutes);  // Use the userRoutes for search

// Default 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Default error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
