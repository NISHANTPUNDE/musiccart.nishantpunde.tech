import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchslice';
import userReducer from './slices/userslice';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice'
export const store = configureStore({
    reducer: {
        search: searchReducer,
        cart: cartReducer,
        user: userReducer,
        auth: authReducer,
    },
});



