import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Auth Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Load user from sessionStorage on initial render
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Save user data to both state and sessionStorage
  const saveUserData = (userData) => {
    setUser(userData);
    sessionStorage.setItem('user', JSON.stringify(userData));
  };

  // Login function
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/V1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const userData = await response.json();
      saveUserData(userData);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  // Sign-up function
  const signUp = async (userName, email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/V1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed. Please try again.');
      }

      const userData = await response.json();
      saveUserData(userData);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
