import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
// import Headers from './pages/Headers';
import Login from './pages/Login.jsx';
// import Dashboard from './pages/Dashboard';
import Error from './pages/Error.jsx';
import Navbar from './components/Navbar.jsx';

export default function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/navbar' element={<Dashboard />} /> */}
        <Route path='*' element={<Error />} />
      </Routes></BrowserRouter>
      
    </>
  );
}