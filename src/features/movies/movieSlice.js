// after

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";

    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${movieText}&type=movie`
    );

    return response.data;
  }
);

// export const fetchAsyncShows = createAsyncThunk(
//   "movies/fetchAsyncShows",
//   async () => {
//     const seriesText = "Friend";

//     const response = await movieApi.get(
//       `?apiKey=${APIkey}&s=${seriesText}&type=movie`
//     );

//     return response.data;
//   }
// );

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`);

    return response.data;
  }
);

const initialState = {
  movies: {},
  // shows: {},
  SelectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetchAsyncMovies fulfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    // [fetchAsyncShows.fulfilled]: (state, { payload }) => {
    //   console.log("fetchAsyncShows fulfilled");
    //   return { ...state, shows: payload };
    // },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("fetchAsyncMovieOrShowDetail fulfilled");
      return { ...state, SelectMovieOrShow: payload };
    },
  },
});

export const { removeSelectMovieOrShow } = movieSlice.actions; // 액션 크리에이터 내보내기
export const getAllMovies = (state) => state.movies.movies;
// export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShow = (state) => state.movies.SelectMovieOrShow;
export default movieSlice.reducer; // 리듀서 내보내기

// before ex)

/* export const OPEN = 'msgbox/OPEN';
export const CLOSE = 'msgbox/CLOSE';

export const open = (message) => ({ type: OPEN, message });

const initialState = {
  open: false,
  message: '',
};

export default msgbox(state = initialState, action) {
  switch (action.type) {
	case OPEN:
      return { ...state, open: true, message: action.message };
    case CLOSE:
      return { ...state, open: false };
    default:
      return state;
  }
} */
