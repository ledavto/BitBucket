import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = "https://bitbucket-backend.onrender.com";

export const fetchFarms = createAsyncThunk(
  'farms/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${URL}/api/farm`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchProducts = createAsyncThunk(
//   'farms/products',
//   async (productsObj, thunkAPI) => {
//     try {
//       const response = await axios.get(`${URL}/farms`, productsObj);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
