import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Tin of Cookies',
      stock: 500,
      price: 2.99,
      category: 'Food',
    },
    {
      id: 2,
      name: 'Canned Coffee',
      stock: 500,
      price: 1.99,
      category: 'Food',
    },
    {
      id: 3,
      name: 'Toilet Paper',
      stock: 20,
      price: 7.99,
      category: 'Household Supplies',
    },
    {
      id: 4,
      name: 'Handmade Soap',
      stock: 50,
      price: 3.99,
      category: 'Household Supplies',
    },
    {
      id: 5,
      name: 'Camera',
      stock: 30,
      price: 399.99,
      category: 'Electronics',
    },
    {
      id: 6,
      name: 'Tablet',
      stock: 30,
      price: 199.99,
      category: 'Electronics',
    },
  ],
  status: 'idle',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProductStock: (state, action) => {
      const { id, newStock } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.stock = newStock;
      }
    },
  },
});

export const { updateProductStock } = productsSlice.actions;
export default productsSlice.reducer;