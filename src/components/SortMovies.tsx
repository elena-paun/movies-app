import React from 'react';

const SortMovies = ({ handleSortChange }) => {
  return (
    <select
      id='sort-select'
      onChange={handleSortChange}
      className='w-3/4 pl-2 pr-1 h-12 text-docsearch-text-color bg-[rgb(29,30,32)] rounded-sm p-2 text-gray-700 leading-tight focus:outline-none'>
      <option value='ranking'>Ranking</option>
      <option value='release'>Release date</option>
      <option value='numberOfVotes'>Number of votes</option>
    </select>
  );
};

export default SortMovies;
