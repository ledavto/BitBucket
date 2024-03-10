import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchFarms } from './farm-operations';

const handlePending = state => {
  // state.farm.isLoading = true;
};

const handleRejected = (state, action) => {
  // state.farm.isLoading = false;
  state.farm.error = action.payload;
};

const farmSlice = createSlice({
  name: 'farm',
  initialState,

  extraReducers: builder => {
    builder
      //Запит списку АПТЕК
      .addCase(fetchFarms.pending, handlePending)
      .addCase(fetchFarms.fulfilled, (state, action) => {
        // state.farm.isLoading = false;
        // state.farm.error = null;
        // console.log(action.payload);
        state.farm =  [...action.payload];
      })
      .addCase(fetchFarms.rejected, handleRejected);
  },
});

export const presistReducerFarm = farmSlice.reducer;
