import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Secret = () => {
  // Explanation: This component represents a protected page that can only be accessed by authenticated users.
  // It checks if the user is authenticated by verifying the presence of a JWT token.
  // If the user is not authenticated, they are redirected to the login page.

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        // If no JWT token is found, redirect the user to the login page.
        navigate('/login');
      } else {
        try {
          // Send a request to the server to verify the JWT token.
          const { data } = await axios.post(
            "http://localhost:4000",
            {},
            { withCredentials: true }
          );

          if (!data.status) {
            // If the server responds with status false, the token is invalid.
            // Remove the invalid token and redirect the user to the login page.
            removeCookie("jwt");
            navigate('/login');
          } else {
            // If the token is valid, display a welcome message with the user's name.
            toast(`Hi ${data.user}`, { theme: "dark" });
          }
        } catch (error) {
          console.error(error);
          // Handle any errors that occur during the token verification process.
          // You can add appropriate error handling here.
        }
      }
    };

    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logout = () => {
    removeCookie("jwt");
    // Handle user logout by redirecting to the register page.
    navigate('/register');
  };

  return (
    <>
    <div className='private'>
      Secret
      <button onClick={logout}>Logout</button>
      <ToastContainer />
    </div>
    </>
  );
};

export default Secret;
