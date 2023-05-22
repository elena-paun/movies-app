import { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  searchMovies,
  loadMovies,
  getSortedMovies,
  setCurrentPage,
  reverseMoviesOrder,
} from './redux/actions';

import {
  Pagination,
  SearchMovies,
  SortMovies,
  Movies,
  ReverseMovies,
} from './components';

import './input.css';
import store from './store';
import LanguageSwitch from './components/LanguageSwitch';

const App = () => {
  const { t } = useTranslation();
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

  const handleReverseOrder = () => {
    dispatch(reverseMoviesOrder());
  };

  return (
    <Provider store={store}>
      <>
        <div className='flex justify-between'>
          <div className='font-bold text-3xl'>{t('title')}</div>
          <LanguageSwitch />
        </div>
        <div className='flex items-center py-10 gap-10'>
          <SearchMovies searchTerm={searchTerm} handleSearch={handleSearch} />
          <SortMovies handleSortChange={handleSortChange} />
          <ReverseMovies handleReverseOrder={handleReverseOrder} />
        </div>
        <Movies />
        <Pagination
          currentPage={currentPage}
          perPage={perPage}
          setPage={setPage}
        />
      </>
    </Provider>
  );
};

export default App;
