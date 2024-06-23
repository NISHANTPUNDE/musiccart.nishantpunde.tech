import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null || localStorage.getItem('name'),
  email: null || localStorage.getItem('email'),
  isAuthenticated: false || localStorage.getItem('name') ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.name = action.payload.name !== undefined ? action.payload.name : state.name;
      state.email = action.payload.email !== undefined ? action.payload.email : state.email;
      state.isAuthenticated = true;
      localStorage.setItem('name', state.name);
      localStorage.setItem('email', state.email);
    },
    logoutSuccess: (state) => {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      state.name = null;
      state.isAuthenticated = false;
      
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
