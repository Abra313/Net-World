import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load user data from sessionStorage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('user')); // Get user data from sessionStorage
    if (storedUser) {
      setUser(storedUser); // Set user state if available
    }
  }, []);

  // Function to save user to sessionStorage
  const saveUserToSessionStorage = (userData) => {
    sessionStorage.setItem('user', JSON.stringify(userData)); // Save user data to sessionStorage
  };

  // Sign up function
  const signup = async (userData) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5004/api/V1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
        credentials: 'include', // Include cookies in requests
      });
      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        saveUserToSessionStorage(data.user); // Save user data in sessionStorage
      } else {
        throw new Error(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup Error:', error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5004/api/V1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        saveUserToSessionStorage(data.user); // Save user data in sessionStorage
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login Error:', error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user'); // Clear user data from sessionStorage
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
