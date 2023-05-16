import { configureStore } from '@reduxjs/toolkit';

// Define the initial state for your data
const initialState = {
  movies: [],
  sortedMovies: [],
  searchBy: '',
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'SORTED_MOVIES':
      return {
        ...state,
        sortedMovies: action.payload,
      };
    case 'SEARCH_BY':
      return {
        ...state,
        searchBy: action.payload,
      };
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: movieReducer,
});
