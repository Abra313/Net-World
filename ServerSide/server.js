const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbconns');
const authRoutes = require('./routes/userAuth');
const cors = require('cors');
dotenv.config();

// Connect to database
connectDB();


const app = express();

app.use(cors({
    origin: '*' 
  })); 

// Middleware
app.use(express.json());

// Routes
app.use('/api/V1/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
