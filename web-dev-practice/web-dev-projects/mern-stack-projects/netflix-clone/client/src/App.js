import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/register/REgister';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login'; // I assume Login is in a 'login' folder

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/watch'>
          <Watch />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
