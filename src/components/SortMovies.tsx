import React from 'react';
import { useTranslation } from 'react-i18next';

const SortMovies = ({ handleSortChange }) => {
  const { t } = useTranslation();
  return (
    <select
      id='sort-select'
      onChange={handleSortChange}
      className='w-3/4 pl-2 pr-1 h-12 text-docsearch-text-color bg-[rgb(29,30,32)] rounded-sm p-2 text-gray-700 leading-tight focus:outline-none'>
      <option value='ranking'>{t('sort.ranking')}</option>
      <option value='release'>{t('sort.releaseDate')}</option>
      <option value='numberOfVotes'>{t('sort.votes')}</option>
    </select>
  );
};

export default SortMovies;
