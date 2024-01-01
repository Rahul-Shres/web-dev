import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import authSlice from "./authSlice";

// Creating your store and putting your reducers (toy organizers) inside
const store = configureStore({
    reducer: {
        cart: cartReducer, // Organizer for cart-related information
        product: productReducer, // Organizer for product-related information
        auth : authSlice,
    }
});

export default store; // Your toy box is ready to be used!
// it is a global state of the application
//  This store is created using Redux configuration (reducers, middleware, etc.).