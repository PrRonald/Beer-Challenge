import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'http://localhost:3000/products';
export const itemsFetch = createAsyncThunk(
    'items/itemsFetch',
    async () => {
        const response = await axios.get(URL);
        return response.data;
    }
);

const URL2 = 'http://localhost:3000/stockPrice';
export const stockPriceFetch = createAsyncThunk(
    'stockPrice/stockPriceFetch',
    async (sku) => {
        const url = (sku.path) ? `${URL2}/${sku.id}` : URL2 ;
        const response = await axios.get(url);
        return response.data;
    }
);

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        data: [],
        status: 'idle',
    },
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
    },
});

export const stockPriceSlice = createSlice({
    name: 'stockPrice',
    initialState: {
        data: [],
        status: 'idle',
    },
    extraReducers: (builder) => {
        builder
            .addCase(stockPriceFetch.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(stockPriceFetch.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(stockPriceFetch.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default {
    items: itemsSlice.reducer,
    stockPrice: stockPriceSlice.reducer,
};
