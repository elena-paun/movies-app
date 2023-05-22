const ReverseMovies = ({ handleReverseOrder }) => {
  return (
    <div
      className='flex items-center cursor-pointer'
      onClick={handleReverseOrder}>
      <svg
        className='w-5 h-5 text-gray-500 transform rotate-90'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M12 5l-7 7 7 7' />
      </svg>
      <svg
        className='w-5 h-5 text-gray-500 transform rotate-90'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M12 19l7-7-7-7' />
      </svg>
    </div>
  );
};

export default ReverseMovies;
