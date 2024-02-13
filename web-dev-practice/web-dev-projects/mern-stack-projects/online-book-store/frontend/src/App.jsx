import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
// import AppBar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from "./Home";
import Google from "./Google";
import AdminLogin from "./pages/admin/auth/login/AdminLogin";
import AppBar from "./components/Navbar/Navbar";
import ForgotPassword from "./pages/admin/auth/forgotPassword/ForgotPassword";
import VerifyOtpAdmin from "./pages/admin/auth/verifyOtp/verifyOtp";
import ResetPassword from "./pages/admin/auth/resetPassword/ResetPassword";
import Login from "./pages/student/auth/Login/Login";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      
      <NextUIProvider>
      <BrowserRouter>
      <main className={darkMode ? "dark text-foreground bg-background" : "custom-theme" }>
  <AppBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  {/* <Route path='/login' element={<AdminLogin />} /> */}
  <Route path='/forgotpassword' element={<ForgotPassword />} />
  <Route path='/verifyotp' element={<VerifyOtpAdmin />} />
  <Route path='/resetpassword' element={<ResetPassword />} />
  <Route path="/google/:id" element={<Google />} />
  </Routes>
</main>
</BrowserRouter>
      </NextUIProvider>
      
    </>
  );
}
