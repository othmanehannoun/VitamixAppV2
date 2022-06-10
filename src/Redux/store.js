import { configureStore } from "@reduxjs/toolkit";
import category from "./Slices/ProviderSlice";
import user from './Slices/UserSlice'
import cartReducer from './Slices/CartSlice'



export default configureStore({
    reducer: {
        category,
        user,
        cart: cartReducer
    }
})