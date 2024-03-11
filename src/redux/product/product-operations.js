import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://bitbucket-backend.onrender.com';

export const fetchProductbyFarm = createAsyncThunk(
  'farm/fetchProduct',
  async (id, thunkAPI) => {
    try {
      console.log('ID - ', id);
      const { data } = await axios.get(`${URL}/api/product/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
