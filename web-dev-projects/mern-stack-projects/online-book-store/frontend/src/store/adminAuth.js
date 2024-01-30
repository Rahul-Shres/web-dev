import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/misc/statuses";
import { APIAdminApiAuthentication } from "../http";

const adminAuth = createSlice({
  name: "adminAuth",
  initialState: {
    user: null,
    status: STATUSES.LOADING,
    error: null,
  },
  reducers: {
    setStatus(state,action){
      state.status = action.payload
     },
  },
});

export const { setStatus } = adminAuth.actions;



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