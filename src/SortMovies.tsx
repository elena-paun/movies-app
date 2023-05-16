import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadMovies, { getSortedMovies } from './movieActions';
import { store } from './store';

const SortMovies = () => {
  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    // dispatch({
    //   type: 'SEARCH_BY',
    //   payload: event.target.value,
    // });

    store.dispatch(getSortedMovies(event.target.value));
  };

  return (
    <div>
      <label htmlFor='sort-select'>Sort by:</label>
      <select id='sort-select' onChange={handleSortChange}>
        <option value=''>None</option>
        <option value='ranking'>Ranking</option>
        <option value='release'>Release date</option>
        <option value='numberOfVotes'>Number of votes</option>
      </select>
    </div>
  );
};
SortMovies.propTypes = {
  pageNumberRef: { current: null },
};
export default SortMovies;
