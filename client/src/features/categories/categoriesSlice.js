import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Food', 'Household Supplies', 'Electronics', 'Books', 'Toys'],
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;