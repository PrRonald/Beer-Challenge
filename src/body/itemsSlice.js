import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'http://localhost:3000/products';
export const itemsFetch = createAsyncThunk(
    'item/itemsFetch',
    async () => {
        const response = await axios.get(URL);
        return response.data;
    }
)

export const itemsSlice = createSlice({
    initialState: {
        value: 0
    },
    name: 'items',
    extraReducers: (builder) => {
        builder
        .addCase(itemsFetch.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(itemsFetch.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
          })
          .addCase(itemsFetch.rejected, (state) => {
            state.status = 'failed';
          });
    }
})

export default itemsSlice.reducer;

