import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  orderHistory: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    addOrder: (state, action) => {
      state.orderHistory.push({
        id: Date.now(),
        ...action.payload,
        date: new Date().toISOString(),
      });
    },
  },
});

export const { login, logout, addOrder } = userSlice.actions;
export default userSlice.reducer;