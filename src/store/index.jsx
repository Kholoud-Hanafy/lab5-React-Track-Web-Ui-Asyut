
import { configureStore } from '@reduxjs/toolkit';
import  favoriteMoviesReducer from './slices/favoriteMoviesSlice';
import moviesReducer from './slices/fetchApiSlice';
import counterReducer from './slices/counterSlice'
const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer, 
    movies: moviesReducer,
    counter: counterReducer,

  },
});

export default store;
