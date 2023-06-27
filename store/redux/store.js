import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice } from './favorite'

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteSlice.reducer
    }
})