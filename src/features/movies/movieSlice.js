// after

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions; // 액션 크리에이터 내보내기
export const getAllMovies = (state) => state.movies.movies;
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
