// userVerificationSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { STATUSES } from "../globals/misc/statuses";
import { APIAdminApiAuthentication } from '../http';

const userVerificationSlice = createSlice({
  name: 'userVerification',
  initialState: {
    myProfile: null,
    status: STATUSES.LOADING,
    
    counselorData : {
        email : null, 
        status : STATUSES.LOADING
       },
       userNumberdData : {
        password : null, 
        status : STATUSES.LOADING
       },
  },
  reducers: {
    setStatus(state,action){
        state.status = action.payload
       },
    setMyProfile: (state, action) => {
        state.myProfile = action.payload;
      },
      setCounselorData: (state, action) => {
        state.counselorData = { ...state.counselorData, ...action.payload };
      },
      setUserNumberData: (state, action) => {
        state.userNumberData = { ...state.userNumberData, ...action.payload };
      },
  },
});

export const {
    setStatus,
    setMyProfile,
    setCounselorData,
    setUserNumberData,
} = userVerificationSlice.actions;

export default userVerificationSlice.reducer;


export function userVerification(data){
    return async function userVerificationThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
             // Make an API request to authenticate the admin
      const response = await APIAdminApiAuthentication.post("/userVerification", data);
      // Assuming the server returns the admin data on successful login
      const adminData = response.data;
      dispatch(setMyProfile(adminData.myProfile)); // Replace 'myProfile' with the actual key in the response
      dispatch(setCounselorData({ email: adminData.counselorData.email, status: STATUSES.SUCCESS }));
      dispatch(setUserNumberData({ password: adminData.userNumberData.password, status: STATUSES.SUCCESS }));
            
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
  }