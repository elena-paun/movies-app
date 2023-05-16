import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import MoviesList from './MoviesList';
import RatingFilter from './RatingFilter';
import SortMovies from './SortMovies';
import loadMovies, { searchMovies } from './movieActions';
import Search from './Search';

const App = () => {
  const [searchTerm, setSearchTerm] = useState();
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    dispatch({ type: 'SEARCH_BY', payload: event.target.value });
    dispatch(searchMovies(event.target.value));
  };

  return (
    <Provider store={store}>
      <>
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
        {/* <input
          type='text'
          placeholder='Search movies'
          value={searchTerm}
          onChange={handleSearch}
        /> */}
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        <SortMovies />
        <MoviesList />
      </>
    </Provider>
  );
};

export default App;
