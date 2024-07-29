import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './body/itemsSlice'; 
import stockPriceReducer from './body/itemsSlice'; 

const store = configureStore({
  reducer: {
    items: itemsReducer.items,
    stockPrice: stockPriceReducer.stockPrice,
  },
});

export default store;
