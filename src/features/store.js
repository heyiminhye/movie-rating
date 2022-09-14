// after
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// before

//import { createStore } from 'redux';
//import moviesReducer from './module/moviesReducer';

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//const store = createStore(moviesReducer, devTools);
