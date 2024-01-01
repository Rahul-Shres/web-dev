import { createSlice } from "@reduxjs/toolkit";



// Organizer for cart-related toys
const cartSlice = createSlice({
    name : "cart",
    initialState :[], // Your cart starts empty
    reducers : {
        add(state,action){
            state.push(action.payload)   // Adding new toys to your cart
        },
        // Removing specific toys from your cart
        remove(state,action){
           return state.filter((item)=>item._id !== action.payload) // [1,2,3] ==> 3 ==>state = [1,2]
            
        }
    }
})
// By using object destructuring, the add and remove action creators are extracted 
// from cartSlice.actions and can be directly accessed/exported for use elsewhere 
// in your application, allowing you to dispatch these actions to update the cart state in the Redux store.
export const {add,remove} = cartSlice.actions  // These are tools to help you manage your cart items

export default cartSlice.reducer  // This is your organizer for cart-related toys
 

// Slices are like specific organizers for each type of toy.
// You have one organizer for your cart items and another for your product items.