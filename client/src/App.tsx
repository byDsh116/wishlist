import React from 'react';
import './App.css'; 
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/LoginPage';
import UserPage from './pages/UserPage';
import PrivateRoute from './routes/PrivateRoute';
import Navbar from './components/Navbar';
import RegistrationPage from './components/RegistrationPage';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/registration" element={<RegistrationPage />} />

        <Route path="/userPage/:username" element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
};

export default App;
