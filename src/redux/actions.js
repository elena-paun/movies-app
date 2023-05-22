import moviesList from '../../movies.json';

export const getSortedMovies = (option) => (dispatch) =>
  dispatch({
    type: 'SORT_MOVIES',
    payload: option,
  });

export const searchMovies = (value) => (dispatch) =>
  dispatch({
    type: 'SEARCH_MOVIES',
    payload: value,
  });

export const reverseMoviesOrder = () => (dispatch) =>
  dispatch({
    type: 'REVERSE_MOVIES_ORDER',
  });

export const loadMovies = () => (dispatch) =>
  dispatch({
    type: 'MOVIES',
    payload: moviesList.data,
  });

export const setCurrentPage = (page) => (dispatch) =>
  dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
