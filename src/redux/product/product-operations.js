import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = "https://bitbucket-backend.onrender.com";

export const fetchProductbyFarm = createAsyncThunk(
  'farms/fetchAll',
  async (id, thunkAPI) => {
    try {
      console.log("ID - ",id)
      const { data } = await axios.get(`${URL}/api/product/${id}`);
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
