import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { store } from './store';
import PropTypes from 'prop-types';
import loadMovies, { getFilteredMovies } from './movieActions';

function RatingFilter() {
  const [selectedOption, setSelectedOption] = useState();
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  // const visibleMovies = filteredMovies.slice(0, 20);
  // useEffect(() => {
  //   store.dispatch({
  //     type: 'MOVIES',
  //     payload: filteredMovies,
  //   });
  // }, [dispatch, filteredMovies]);

  const handleOptionChange = (event) => {
    // console.log(event.target.value);
    // const filteredMovies = movies.filter((movie) => {
    //   if (event.target.value === '>=8') {
    //     return movie.rating >= 8 && movie.rating < 9;
    //   }
    //   if (event.target.value === '>9') {
    //     return movie.rating > 9;
    //   }
    // });
    dispatch({
      type: 'SEARCH_BY',
      payload: event.target.value,
    });

    setSelectedOption(event.target.value);
    // store.dispatch({
    //   type: 'MOVIES',
    //   payload: filteredMovies,
    // });
    dispatch(getFilteredMovies(event.target.value));
  };

  return (
    <div>
      <label>
        <input
          type='radio'
          value='8'
          checked={selectedOption === '8'}
          onChange={handleOptionChange}
        />
        8
      </label>
      <label>
        <input
          type='radio'
          value='9'
          checked={selectedOption === '9'}
          onChange={handleOptionChange}
        />
        9
      </label>
    </div>
  );
}
RatingFilter.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      rank: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default RatingFilter;
