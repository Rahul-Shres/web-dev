import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import AppBar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Login from "./pages/auth/Login/Login";
import Google from "./Google";
import Home from "./pages/Home";

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
  <Route path="/google/:id" element={<Google />} />
  </Routes>
</main>
</BrowserRouter>
      </NextUIProvider>
      
    </>
  );
}
