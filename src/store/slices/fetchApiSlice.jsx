import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './../../axioseConfig/instance';

// Async thunk to fetch a single movie by its ID
export const fetchMovieById = createAsyncThunk(
  'movies/fetchMovieById',
  async (movieId) => {
    const response = await axiosInstance.get(`/${movieId}`);
    return response.data; // Return the fetched movie
  }
);

// Async thunk to fetch a list of movies
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (page) => {
    const response = await axiosInstance.get(`/popular?&page=${page}`);
    return { movies: response.data.results, currentPage: page }; // Return movies and currentPage
  }
);

// Slice for movies
const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    movie: null, // Initialize movie as null
    status: 'idle',
    error: null,
    currentPage: 1, // Add currentPage to the initial state
  },
  reducers: {
    // Add reducers for other actions if needed
  },
  extraReducers: (builder) => {
    // Reducer logic for fetchMovies
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.movies; // Update movies
        state.currentPage = action.payload.currentPage; // Update currentPage
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // Reducer logic for fetchMovieById
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload; // Update movie with the fetched movie
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
