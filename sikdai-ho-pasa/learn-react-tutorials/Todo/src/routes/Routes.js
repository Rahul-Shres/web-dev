import React from 'react';
import { Redirect,Route,BrowserRouter,Switch } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AddPage from '../pages/AddPage';
import Viewpage from '../viewpage/Viewpage';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <>
   <BrowserRouter>
        <Switch>
    {/* // Redirecting the root path to the "/home" path */}
<Route exact path="/">
  <Redirect to="/home" />
</Route>

{/* // Route for the "/home" path, rendering the MainPage component */}
<Route exact path="/home" component={MainPage} />

{/* Route for the "/add" path, rendering the AddPage component */}
<Route exact path="/add">
  {/* Render the AddPage component */}
  <AddPage />
</Route>


{/* // Route for the "/login" path, rendering the Login component */}
<Route exact path="/login" component={Login} />

{/* // Route for the "/view/:id" path, rendering the Viewpage component with dynamic ID parameter */}
<Route path="/view/:id" component={Viewpage} exact />
<Route path="*">
  <NotFound />
</Route>

</Switch>
      </BrowserRouter>
  </>
);

export default Routes;
