const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser'); // For parsing cookies
const connectDB = require('./Config/dbconns');
const authRoutes = require('./routes/userAuth');

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Security headers
app.use(helmet());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow cookies to be sent
}));

// Parse cookies
app.use(cookieParser());

// Compress responses
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use('/api/V1/auth', authRoutes);

// Default error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
  });
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
