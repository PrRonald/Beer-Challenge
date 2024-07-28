import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./body/itemsSlice"

const store = configureStore({
    reducer: {
        items: itemsReducer,
    }
});

export default store