// Importing necessary modules and dependencies
import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../global/misc/statuses";
import axios from "axios";

// Creating a Redux slice for authentication
const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: [],            // Array to store user data
        status: STATUSES.SUCCESS,   // Initial status set to SUCCESS
        token: ""            // Token for authentication
    },
    reducers: {
        // Reducer to set user data in the state
        setUser(state, action) {
            state.data = action.payload;
        },
        // Reducer to set status in the state
        setStatus(state, action) {
            state.status = action.payload;
        },
        // Reducer to set authentication token in the state
        setToken(state, action) {
            state.token = action.payload;
        }
    },
});

// Exporting individual actions from the slice
export const { setUser, setStatus, setToken } = authSlice.actions;

// Exporting the reducer function for the slice
export default authSlice.reducer;

// Async action to register a user
export function registerUser(data) {
    return async function registerUserThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));

        try {
            // Initiating the registration process by dispatching an action to set the status to "LOADING". 
            // This informs the UI components that a registration request is in progress, and they may show 
            // loading indicators.
            const response = await axios.post("http://localhost:8000/api/auth/register", data);
            
            // Updating the application state with the user data received from the server response
            dispatch(setUser(response.data.data));

            // Setting the status to "SUCCESS" after a successful registration
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (error) {
            console.log(error);
            
            // In case of an error during registration, setting the status to "ERROR"
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}

// Async action to log in a user
export function loginUser(data) {
    return async function loginUserThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));

        try {
            // Initiating the login process by dispatching an action to set the status to "LOADING". 
            // This informs the UI components that a login request is in progress, and they may show 
            // loading indicators.
            const response = await axios.post("http://localhost:8000/api/auth/login", data);
            
            // Updating the application state with the authentication token received from the server response
            dispatch(setToken(response.data.data));

            // Setting the status to "SUCCESS" after a successful login
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (error) {
            console.log(error);
            
            // In case of an error during login, setting the status to "ERROR"
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}
