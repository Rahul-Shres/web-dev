import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './global/components/navbar/Navbar';
import Footer from './global/components/footer/Footer';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import Cart from './pages/cart/Cart';


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
