import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadMovies from './movieActions';

const MovieList = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);

  const loader = useRef(null);

  useEffect(() => {
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        console.log({ target });
        dispatch(loadMovies());
      }
    };

    const observer = new IntersectionObserver(handleObserver);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [dispatch, loader]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th />
            <th>Rank & Title</th>
            <th>Year</th>
            <th>Rating</th>
            <th>Number of votes</th>
            <th>Crew</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <img src={movie.img} />
              </td>
              <td>{movie.title}</td>
              <td>{movie.release}</td>
              <td>{movie.rating.toFixed(1)}</td>
              <td>{movie.votes}</td>
              <td>{movie.crew}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div ref={loader}>Loading...</div>
    </div>
  );
};

export default MovieList;
