const Search = ({ searchTerm, handleSearch }) => {
  return (
    <div className='w-full relative bg-[rgb(29,30,32)] flex items-center h-12 rounded-md'>
      <svg
        className='w-6 h-6 ml-3 text-[rgb(178, 186, 194)]'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M10 18l6-6m0 0l-6-6m6 6H4'
        />
      </svg>
      <input
        type='text'
        placeholder='Search movies'
        value={searchTerm}
        onChange={handleSearch}
        className='appearance-none bg-[rgb(29,30,32)] border-0 text-docsearch-text-color flex-1
         leading-normal font-inherit text-1.2em h-full outline-none pl-2 w-80'
      />
    </div>
  );
};

export default Search;
