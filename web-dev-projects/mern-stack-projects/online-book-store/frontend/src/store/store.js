import { configureStore } from "@reduxjs/toolkit";
import adminAuthReducer from "./adminAuth"; // Adjust the path accordingly

const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
    // Add other reducers if needed
  },
});

export default store;
