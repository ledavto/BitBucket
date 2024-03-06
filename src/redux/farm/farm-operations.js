import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFarms = createAsyncThunk(
  'farms/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/farms');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'farms/products',
  async (productsObj, thunkAPI) => {
    try {
      const response = await axios.get('/farms', productsObj);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
