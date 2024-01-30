import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/misc/statuses";
import { APIAdminApiAuthentication } from "../http";

const adminAuth = createSlice({
  name: "adminAuth",
  initialState: {
    data: null,
    status: STATUSES.LOADING,
    token: null,
 },
 
  reducers: {
    setUser(state,action){
      state.data = action.payload
     },
     setStatus(state,action){
      state.status = action.payload
     },
     setToken(state,action){
      state.token = action.payload
     },
  },
});

export const { setUser,setStatus,setToken } = adminAuth.actions;



export default adminAuth.reducer;


export function registerAdmin(data){
  return async function registerAdminThunk(dispatch){
      dispatch(setStatus(STATUSES.LOADING))
      try {
           // Make an API request to authenticate the admin
    const response = await APIAdminApiAuthentication.post("/admin/register", data);
    // Assuming the server returns the admin data on successful login
    const adminData = response.data;
          
          dispatch(setStatus(STATUSES.SUCCESS))
      } catch (error) {
          console.log(error)
          dispatch(setStatus(STATUSES.ERROR))
      }
  }
}


export function loginAdmin(data) {
  return async function loginUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));

    try {
      const response =  await APIAdminApiAuthentication.post("/admin/login", data);

      console.log("Login API Response:", response); // Log the entire response for debugging

      if (response.status === 200 && response.data.token) {
        dispatch(setUser(response.data.data));
        dispatch(setToken(response.data.token));
        dispatch(setStatus(STATUSES.SUCCESS));

        localStorage.setItem('token', response.data.token);
        window.location.href = "/";
      } else {
        console.error("Unexpected API response:", response);
        alert("Unexpected response from the server. Please try again.");
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error("Login API Error:", error); // Log the error for debugging
      alert("Something went wrong. Please try again.");
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
