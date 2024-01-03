import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../global/misc/statuses";
import { API } from "../http/index";
import Cookies from 'js-cookie';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: [],
        status: STATUSES.SUCCESS,
        token: "" // This will store the token received from the server
    },
    reducers: {
        setUser(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload; // Update the token value in the state
        },
        logOut(state, action) {
            state.data = [];
            state.token = null;
            state.state = STATUSES.SUCCESS;
        }
    }
});

export const { setUser, setStatus, setToken, logOut } = authSlice.actions;

export default authSlice.reducer;

export function registerUser(data) {
    return async function registerUserThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await API.post("auth/register", data);
            
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}

export function loginUser(data) {
    return async function loginUserThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await API.post("/auth/login", data);

            // Set the token in cookies
            Cookies.set('token', response.data.token);

            dispatch(setUser(response.data.data));
            dispatch(setToken(response.data.token));
            dispatch(setStatus(STATUSES.SUCCESS));
            localStorage.setItem('token', response.data.token);
            const token = localStorage.getItem('token');
                if (token) {
                // Token is present in localStorage
                console.log('Token exists in localStorage:', token);
                } else {
                // Token is not present in localStorage
                console.log('Token does not exist in localStorage');
                }

            
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}


// export function loginUser(data) {
//     return async function loginUserThunk(dispatch) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const response = await API.post("/auth/login", data);

//             // Log the token received from the server
//             console.log("Received Token:", response.data.token);

//             // Dispatch the action to set the token in the Redux state
//             dispatch(setUser(response.data.data));
//             dispatch(setToken(response.data.token));
//             dispatch(setStatus(STATUSES.SUCCESS));

//             // Store the token in localStorage for persistence
//             localStorage.setItem('token', response.data.token);
//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }
