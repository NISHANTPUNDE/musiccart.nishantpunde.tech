import { createSlice } from '@reduxjs/toolkit';

const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: storedCart
  },
  reducers: {
    addItemToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item._id === action.payload._id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action) => {
      const updatedCart = state.items.filter(item => item._id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      state.items = updatedCart;
    },
    setCart: (state, action) => {
      localStorage.setItem('cart', JSON.stringify(action.payload));
      state.items = action.payload;
    },
    updateItemQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      console.log(_id, quantity)
      const itemIndex = state.items.findIndex(item => item._id === _id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    }
  }
});

export const { addItemToCart, removeItemFromCart, setCart, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
