
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.movies.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
