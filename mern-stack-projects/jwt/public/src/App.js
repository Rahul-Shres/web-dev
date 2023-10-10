import React from 'react'
import { BrowserRouter,Routes,  Router, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Secret from './pages/Secret'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/register' element={<Register/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/register' element={<Secret/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App