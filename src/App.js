import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import RequestPasswordReset from './components/RequestPasswordReset';
import ResetPassword from './components/ResetPassword';


const App = () => {
  return (
    <Router>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/request-reset" element={<RequestPasswordReset />} />
      <Route path="/reset-password/:resetToken" element={<ResetPassword />} />

    <Route path="/" element={<Home />} />
  </Routes>
</Router>
  );
}

export default App;
