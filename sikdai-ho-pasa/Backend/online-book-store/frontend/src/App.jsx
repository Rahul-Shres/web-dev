import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("http://localhost:5173/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        });
  
        if (response.status === 200) {
          const resObject = await response.json();
          setUser(resObject.user);
          console.log(user)
        } else if (response.status === 401) {
          // Handle unauthenticated user (redirect or show login)
          setUser(null);
        } else {
          throw new Error("Authentication failed!");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    getUser();
  }, []);

  console.log(user, "user")
  
  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5173/auth/login/success", {
  //         method: "GET",
  //         credentials: "include",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Credentials": true,
  //         },
  //       });

  //       if (response.status === 200) {
  //         const resObject = await response.json();
  //         setUser(resObject.user);
  //         console.log(setUser)
  //       } else {
  //         throw new Error("Authentication failed!");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getUser();
  // }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
