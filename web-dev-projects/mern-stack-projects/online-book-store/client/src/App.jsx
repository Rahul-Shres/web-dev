import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
// import Headers from './pages/Headers';
import Login from './pages/Login.jsx';
// import Dashboard from './pages/Dashboard';
import Error from './pages/Error.jsx';
import Google from './pages/Google.jsx';
// import Nav from './components/Nav.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import ProductDetail from './pages/productDetails/component/ProductDetails.jsx';
import Cart from './pages/Cart/Cart.jsx';
import  Register  from './pages/admin/auth/Register/Register.jsx';
import AppBar from "./components/Navbar.jsx";




export default function App() {
  

  return (
    <>
     <NextUIProvider>
    {/* <div className='w-screen min-h-screen h-auto flex flex-col items-center justify-center'> */}
      <BrowserRouter>
      {/* <Nav /> */}
      {/* <AppBar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/navbar' element={<Dashboard />} /> */}
        <Route path="/google/:id" element={<Google />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/product-detail" element={<ProductDetail />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path='*' element={<Error />} />
        
      </Routes></BrowserRouter>
      {/* </div> */}
      </NextUIProvider>
    </>
  );
}