import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './global/components/navbar/Navbar';
import Footer from './global/components/footer/Footer';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import Cart from './pages/cart/Cart';
import Register from './pages/auth/register/Register';
import ProductDetails from './pages/productDetails/ProductDetails';
import CheckOut from './pages/checkout/CheckOut';
import UserProfile from './pages/profile/UserProfile';
import MyOrders from './pages/myOrders/MyOrders';
import KhaltiSuccess from './pages/success/KhaltiSuccess';
import OrderDetails from './pages/orderDetails/OrderDetails';


function App() {
  return (
    <>
  {/* Wraps the entire application with the Redux Provider, allowing any nested components to access the Redux store. */}
      <Provider store={store}>
         {/* Initializes the router for the application. */}
        <BrowserRouter>
        {/* Renders the navigation bar at the top. */}
          <Navbar />
          {/* Defines the different routes available in the application. */}
          <Routes>
          {/* Specifies a route and its corresponding component to render when that route matches the URL path. */}
          <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/productdetails/:id" element={<ProductDetails />} />
    <Route path="/checkout" element={<CheckOut />} />
    <Route path="/success" element={<KhaltiSuccess />} />
    <Route path="/profile" element={<UserProfile />} />
    <Route path="/myorders" element={<MyOrders />} />
    <Route path="/myorders/:id" element={<OrderDetails />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

// This function is the root component of the application.
