const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const connectDB = require('./Config/dbconns');
const authRoutes = require('./routes/userAuth');
const cors = require('cors');

dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(cors({
    origin: '*' 
}));

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Enable CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

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

// User search route with pagination
app.get('/api/V1/search-users', async (req, res) => {
    try {
        // Get search query, page, and limit from query params
        const { query = '', page = 1, limit = 10 } = req.query;

        // Create search query (case-insensitive, match username or email)
        const searchQuery = query
            ? { $or: [
                { username: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } }
            ]}
            : {};

        // Pagination logic
        const users = await User.find(searchQuery)
            .skip((page - 1) * limit) // Skip results based on the current page
            .limit(Number(limit))     // Limit the number of results
            .select('username profileImage email'); // Optional: return specific fields

        const totalUsers = await User.countDocuments(searchQuery); // Count the total number of users that match the search query

        res.json({
            users,
            totalPages: Math.ceil(totalUsers / limit), // Calculate total pages based on the limit
            currentPage: page,
            totalUsers
        });
    } catch (err) {
        res.status(500).json({ message: 'Error searching users', error: err.message });
    }
});

// Auth routes
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
