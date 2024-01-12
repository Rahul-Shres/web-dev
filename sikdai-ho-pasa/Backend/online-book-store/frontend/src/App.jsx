import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import HandleLoginFailure from './components/Auth/HandleLoginFailure'; // Import the component if not imported
import WelcomePage from './components/Auth/WelcomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-failure" element={<HandleLoginFailure />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
