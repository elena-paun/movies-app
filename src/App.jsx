import { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import {
  searchMovies,
  loadMovies,
  getSortedMovies,
  setCurrentPage,
} from './redux/actions';

import moviesList from '../movies.json';
import {
  Pagination,
  SearchMovies,
  SortMovies,
  Movies,
  ReverseMovies,
} from './components';

import './input.css';
import store from './store';

const App = () => {
  const [searchTerm, setSearchTerm] = useState();
  const dispatch = useDispatch();
  const { movieReducer } = useSelector((state) => state);
  const { currentPage, perPage } = movieReducer;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    dispatch(searchMovies(event.target.value));
  };
  const handleSortChange = (event) => {
    dispatch(getSortedMovies(event.target.value));
  };

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const setPage = (page) => {
    dispatch(setCurrentPage(page));
  };
  return (
    <Provider store={store}>
      <>
        <div className='font-bold text-xl'>Top Rated Movies</div>
        <div className='flex items-center py-10 gap-10'>
          <SearchMovies searchTerm={searchTerm} handleSearch={handleSearch} />
          <SortMovies handleSortChange={handleSortChange} />
          <ReverseMovies />
        </div>
        <Movies />
        <Pagination
          currentPage={currentPage}
          perPage={perPage}
          totalMovies={moviesList.data.length}
          setPage={setPage}
        />
      </>
    </Provider>
  );
};

export default App;
