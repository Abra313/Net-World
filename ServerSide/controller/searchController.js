// controllers/userController.js
const User = require('../models/schema/searchModel'); 

// Search and Paginate Users
const searchUsers = async (req, res) => {
    const { query = '', page = 1, limit = 10 } = req.query;
    
    try {
        // Build the search query (case-insensitive search)
        const searchQuery = query ? { username: { $regex: query, $options: 'i' } } : {};

        // Pagination logic
        const users = await User.find(searchQuery)
            .skip((page - 1) * limit)  // Skip users based on the current page
            .limit(Number(limit))      // Limit number of results per page
            .select('username profileImage'); // Optional: only return certain fields

        const totalUsers = await User.countDocuments(searchQuery); // Count total matching users

        res.json({
            users,
            totalPages: Math.ceil(totalUsers / limit), // Calculate total pages
            currentPage: page,
        });
    } catch (err) {
        res.status(500).json({ message: 'Error searching users', error: err.message });
    }
};

module.exports = { searchUsers };
