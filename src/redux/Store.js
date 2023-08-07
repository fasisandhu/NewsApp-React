import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "./NewsFetch";

export const store = configureStore({
    reducer:{
        news:NewsReducer},
})
