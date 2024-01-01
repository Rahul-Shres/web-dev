import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Different states for your toy organizer
const STATUSES = Object.freeze({
    SUCCESS : 'success',
    ERROR : 'error',
    LOADING : 'loading'
})

// Organizer for product-related toys
const productSlice = createSlice({
    name : "product",
    initialState :{
        data : [], // Your toy collection
        status : STATUSES.SUCCESS // The current status of your toy collection
    },
    reducers : {
       setProducts(state,action){
        state.data = action.payload // Putting new toys into your collection
       },
       setStatus(state,action){
        state.status = action.payload // Changing the status of your collection
       } 
    },
        // Extra organizers for async actions (fetching toys)
    extraReducers : (builder) =>{
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status = STATUSES.LOADING // When you're trying to get new toys
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data = action.payload 
            state.status = STATUSES.SUCCESS // When you successfully get new toys
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status = STATUSES.ERROR // When there's an error getting new toys
        }) 
    }

})

export const {setProducts,setStatus} = productSlice.actions  // These are tools to help you manage your toys

export default productSlice.reducer  // This is your organizer for product-related toys
 
export const fetchProducts = createAsyncThunk('products/fetch',async()=>{
    const response = await axios.get("http://localhost:8000/api/products")
    const data = response.data.data 
    return data
})

// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const response = await axios.get("http://localhost:3000/api/products")
//             dispatch(setProducts(response.data.data))
//            dispatch(setStatus(STATUSES.SUCCESS))
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }
