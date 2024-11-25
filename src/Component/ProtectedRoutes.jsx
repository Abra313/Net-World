import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Ensure this path is correct

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // Redirect to login if user is not authenticated
  if (!user) {
    return <Navigate to="/user" />;
  }

  // Render the protected content if user is authenticated
  return children;
};

export default ProtectedRoute;
