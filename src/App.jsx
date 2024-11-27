// import React from 'react';
import './App.css';
import AppRoute from './Route';
import { AuthProvider } from './Context/AuthContext'; // Adjust the path if needed

function App() {
  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  );
}

export default App;
