import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Import AuthContext
import Button from '../Component/Button';
import netWorld from '../asset/images/net world logo.png';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import ModelMessage from '../Component/ModelMessage'; // Import ModelMessage

const SignUp = () => {
  const navigate = useNavigate();
  const { signup, loading } = useAuth(); // Access signup method and loading state from AuthContext
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showModelMessage, setShowModelMessage] = useState(false); // State to control ModelMessage visibility
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateUsername(username)) {
      setError('Username can only contain letters, numbers, and these symbols: .-_@!');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must contain at least one uppercase, one lowercase, one special character, and be at least 8 characters long.');
      return;
    }

    setPasswordError('');
    setError('');

    try {
      await signup({
        userName: username, // Map to backend field name
        FullName: fullName, // Map to backend field name
        email,
        password,
        age: 25, // Optional field
      });

      // Show ModelMessage on successful registration
      showModalMessage();

      // Redirect after delay to allow the user to see the message
      setTimeout(() => {
        hideModalMessage(); // Hide the modal after the delay
        navigate('/login'); // Redirect to login page
      }, 2000); // 2 seconds delay before navigation
    } catch (err) {
      setError(err.message || 'Signup failed.');
    }
  };

  const validateUsername = (username) => /^[a-zA-Z0-9._@!-]+$/.test(username);

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasPunctuation = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;
    return hasUpperCase && hasLowerCase && hasPunctuation && isLongEnough;
  };

  // Function to show the ModelMessage
  const showModalMessage = () => {
    setShowModelMessage(true);
  };

  // Function to hide the ModelMessage
  const hideModalMessage = () => {
    setShowModelMessage(false);
  };

  return (
    <div className="flex mt-[10%] flex-col md:flex-row items-center justify-center md:justify-evenly m-auto mt-16 md:mt-0">
      <div className="md:w-1/3">
        <img src={netWorld} alt="net-world" className="w-full" />
      </div>

      <div className="wrapper mt-8 md:mt-0">
        <div className="flex flex-col items-center gap-4 md:w-full mt-4">
          <h1 className="text-primary text-5xl font-bold">Sign Up</h1>
          <div className="w-16 h-2 bg-primary rounded-full "></div>
        </div>

        <form onSubmit={handleSignup} className="mt-8 md:mt-4">
          <div className="flex flex-col gap-4">
            {/* Username Field */}
            <div className="flex items-center bg-gray-200 rounded-lg p-2">
              <FaUser className="w-6 h-6 ml-2" />
              <input
                type="text"
                placeholder="Username"
                className="flex-1 bg-transparent border-none outline-none ml-2 text-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Full Name Field */}
            <div className="flex items-center bg-gray-200 rounded-lg p-2">
              <FaUser className="w-6 h-6 ml-2" />
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 bg-transparent border-none outline-none ml-2 text-lg"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center bg-gray-200 rounded-lg p-2">
              <MdEmail className="w-6 h-6 ml-2" />
              <input
                type="email"
                placeholder="Email ID"
                className="flex-1 bg-transparent border-none outline-none ml-2 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="flex items-center bg-ashLight rounded-lg">
              <RiLockPasswordFill className="w-6 h-6 ml-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Password"
                className="h-12 flex-1 bg-transparent border-none outline-none text-lg ml-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="ml-2 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="mt-4 text-lg">
            Already Have An Account?{' '}
            <span className="text-primary cursor-pointer" onClick={() => navigate('/login')}>
              Login
            </span>
          </div>

          <div className="flex justify-center items-center mt-8">
            <Button
              type="submit"
              loading={loading}
              className="rounded-lg w-36 h-12"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>

      {/* Show ModelMessage if registration is successful */}
      {showModelMessage && (
        <ModelMessage
          message="Registration Successful!"
          onClose={hideModalMessage} // Close the model using hide function
        />
      )}
    </div>
  );
};

export default SignUp;
