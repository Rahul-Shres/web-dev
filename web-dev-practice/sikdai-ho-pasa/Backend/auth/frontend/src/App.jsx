import React from 'react';
import './App.css';
import Home from './pages/Home';
import Headers from './pages/Headers';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  

  return (
    <>
      <BrowserRouter>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes></BrowserRouter>
      
    </>
  );
}
