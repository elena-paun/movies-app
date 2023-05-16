import moviesList from '../movies.json';

export const getSortedMovies = (option) => (dispatch) => {
  const startIndex = 0;
  const endIndex = startIndex + 20;

  const sortedMovies = moviesList.data.sort((a, b) => {
    if (option === 'ranking') {
      return a.ranking - b.ranking;
    } else if (option === 'release') {
      return new Date(a.release) - new Date(b.release);
    } else if (option === 'numberOfVotes') {
      return b.votes - a.votes;
    } else {
      return 0;
    }
  });
  dispatch({
    type: 'MOVIES',
    payload: [...sortedMovies.slice(startIndex, endIndex)],
  });
};
export const getFilteredMovies = (option) => (dispatch, getState) => {
  const startIndex = 0;
  const endIndex = startIndex + 20;

  const filteredMovies = moviesList.data.filter((movie) => {
    if (option === '9') {
      console.log({ movie });
      return movie.rating >= 9.1;
    }
    if (option === '8') {
      return movie.rating > 8 && movie.rating < 9;
    }
  });

  console.log({ filteredMovies });
  return dispatch({
    type: 'MOVIES',
    payload: [...filteredMovies.slice(startIndex, endIndex)],
  });
};

export const searchMovies = (value) => (dispatch, getState) => {
  const filteredMovies = moviesList.data.filter((movie) => {
    const { title } = movie;
    const lowerCaseSearchTerm = value.toLowerCase();
    return title.toLowerCase().includes(lowerCaseSearchTerm);
  });
  const startIndex = getState().movies.length;
  const endIndex = getState().movies.length + 20;
  console.log({ value });
  return dispatch({
    type: 'MOVIES',
    payload: filteredMovies,
  });
};

const loadMovies = () => (dispatch, getState) => {
  const { movies, searchBy } = getState();
  console.log({ searchBy });
  const startIndex = movies.length;
  const endIndex = startIndex + 20;
  const slicedMovieList = moviesList.data.slice(startIndex, endIndex);
  // if (searchBy) {
  //   return dispatch(searchMovies(searchBy));
  // }
  if (searchBy) return;
  return dispatch({
    type: 'MOVIES',
    payload: [...getState().movies, ...slicedMovieList],
  });
};
export default loadMovies;
