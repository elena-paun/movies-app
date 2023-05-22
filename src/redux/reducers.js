const initialState = {
  movies: [],
  searchTerm: '',
  filteredMovies: [],
  currentPage: 1,
  perPage: 20,
};

const sortMovies = (moviesToSort, option) =>
  moviesToSort.sort((a, b) => {
    if (option === 'ranking') {
      return a.rank - b.rank;
    } else if (option === 'release') {
      return new Date(a.release) - new Date(b.release);
    } else if (option === 'numberOfVotes') {
      return b.votes - a.votes;
    } else {
      return 0;
    }
  });

const searchMovies = (moviesToSearch, value) =>
  moviesToSearch.slice().filter((movie) => {
    const { title, release } = movie;
    const lowerCaseSearchTerm = value.toLowerCase();
    return (
      title.toLowerCase().includes(lowerCaseSearchTerm) ||
      release.toString().toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'MOVIES':
      return {
        ...state,
        movies: action.payload,
        filteredMovies: action.payload,
      };
    case 'REVERSE_MOVIES_ORDER':
      return {
        ...state,
        movies: [...state.movies.reverse()],
        filteredMovies: [...state.filteredMovies.reverse()],
      };
    case 'SEARCH_MOVIES':
      return {
        ...state,
        filteredMovies: searchMovies(state.movies, action.payload),
        searchTerm: action.payload,
        currentPage: 1,
      };
    case 'SORT_MOVIES':
      return {
        ...state,
        movies: sortMovies(state.movies, action.payload),
        filteredMovies: sortMovies(state.filteredMovies, action.payload),
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
