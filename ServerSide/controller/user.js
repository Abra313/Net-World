const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');
require('dotenv').config();

exports.register = async (req, res) => {
  const { userName,FullName, email, password, age, profilePicture } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the user
    const newUser = new User({
      userName,
      FullName:userName,
      email,
      password: hashedPassword,
      age,
      profilePicture: profilePicture || '',
    });

    const savedUser = await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: savedUser._id,
        userName: savedUser.userName,
        email: savedUser.email,
        age: savedUser.age,
        profilePicture: savedUser.profilePicture,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
        age: user.age,
        profilePicture: user.profilePicture,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
