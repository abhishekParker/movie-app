import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchMovie) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${searchMovie}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  selectedMovieID: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },

    removeMovieDetails: (state, action) => {
      state.selectedMovieID = {};
    },
  },

  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending state");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Fetched Successfully");
      return { ...state, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Fetching Failed!");
    },
    [fetchAsyncMovieDetail.fulfilled]: (state, action) => {
      console.log("Fetched Successfully");
      return { ...state, selectedMovieID: action.payload };
    },
  },
});

export const { addMovies, removeMovieDetails } = movieSlice.actions;

export default movieSlice.reducer;
