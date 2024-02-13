import React from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Component for the Login page
const Login = () => {
  const history = useHistory();

  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Container for the login page */}
      <div className='todo_container'>
        {localStorage.getItem('loggedIn') ? (
          <>
            {/* User is already logged in */}
            You are logged in
            <b
              onClick={() => {
                // Clear the login status and redirect to the home page
                localStorage.removeItem('loggedIn');
                history.push('/');
              }}
              style={{ color: 'red' }}
            >
              Log out
            </b>
          </>
        ) : (
          <>
            {/* User is not logged in */}
            <button
              onClick={() => {
                // Perform login actions: display alert, redirect to home page, and set login status in local storage
                alert('You are logged in');
                history.replace('/');
                localStorage.setItem('loggedIn', true);
              }}
            >
              Log in
            </button>
            <br />
            <br />
            {/* Link to a nested route */}
            <Link to="/login/showInfo">Nested Route - Show Info</Link>
            <br />
            {/* Nested Route */}
            <Route path="/login/showInfo">
              <div>You are logged in</div>
            </Route>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
