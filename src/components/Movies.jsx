import { useSelector } from 'react-redux';

const Movies = () => {
  const { currentPage, movies, filteredMovies, perPage, searchTerm } =
    useSelector((state) => state.movieReducer);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const moviesToDisplay = searchTerm ? filteredMovies : movies;
  const moviesPerPage = moviesToDisplay.slice(startIndex, endIndex);

  if (!moviesPerPage.length) return null;

  return (
    <div>
      <table className='table-auto'>
        <thead>
          <tr className='text-sm text-gray-400 leading-10 border border-0 border-t-[0.5px] border-gray-800'>
            <th className='font-light pr-12'>Poster</th>
            <th className='font-light pr-12'>Rank</th>
            <th className='font-light pr-12'>Title</th>
            <th className='font-light pr-12'>Year</th>
            <th className='font-light pr-12'>IMDb Rating</th>
            <th className='font-light pr-12'>Crew</th>
          </tr>
        </thead>
        <tbody>
          <>
            {moviesPerPage.map((movie) => (
              <tr
                key={movie.title}
                className='align-middle mt-4 h-24 group bg-[rgb(27,26,29)] hover:bg-[rgb(40,39,42)] cursor-pointer'
                onClick={() => (location.href = movie.url)}>
                <td>
                  <img src={movie.img} className='pl-4' />
                </td>
                <td>{movie.rank}</td>
                <td>{movie.title}</td>
                <td>{movie.release}</td>
                <td>
                  <div className='flex flex-col'>
                    <div className='flex items-center gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='none'
                        stroke='rgb(215,152,76)'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        width='16'
                        height='16'>
                        <path d='M10 1.208l2.86 5.834 6.36.926-4.83 4.707 1.143 6.653-6.343-3.322L3.977 19.328l1.143-6.653L.78 7.968l6.36-.926L10 1.208z' />
                      </svg>
                      <div className='text-[rgb(215,152,76)] flex gap-2 items-center'>
                        {movie.rating.toFixed(1)}
                      </div>
                    </div>
                    <div className='text-gray-500 text-xs flex gap-2 items-center'>
                      {movie.votes}
                    </div>
                  </div>
                </td>
                <td>
                  <div className='pr-4'>{movie.crew}</div>
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
