import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchProductbyFarm } from './product-operations';

const handlePending = state => {
  state.products.isLoading = true;
};

const handleRejected = (state, action) => {
  state.products.isLoading = false;
  // state.farm.error = action.payload;
};

const productSlice = createSlice({
  name: 'products',
  initialState,

  extraReducers: builder => {
    builder
      //Запит продуктів
      .addCase(fetchProductbyFarm.pending, handlePending)
      .addCase(fetchProductbyFarm.fulfilled, (state, action) => {
        state.products = [...action.payload];
        state.products.isLoading = false;
      })
      .addCase(fetchProductbyFarm.rejected, handleRejected);
  },
});

export const presistReducerProduct = productSlice.reducer;
