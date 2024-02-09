import { configureStore } from "@reduxjs/toolkit";
import adminAuthReducer from "./adminAuth"; // Adjust the path accordingly
import userVerificationReducer from "./userVerification"; // Adjust the path accordingly

const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
    userVerification: userVerificationReducer,
    // Add other reducers if needed
  },
});

export default store;
