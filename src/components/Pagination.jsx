import { useSelector } from 'react-redux';

const Pagination = ({ currentPage, perPage, totalMovies, setPage }) => {
  const pageNumbers = [];

  const { movieReducer } = useSelector((state) => state);
  const { filteredMovies, searchTerm } = movieReducer;
  const totalPages = Math.ceil(filteredMovies.length / perPage);
  console.log({ searchTerm });
  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > 5) {
    if (currentPage <= 3) {
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    const startIndex = (i - 1) * perPage;
    if (startIndex < totalMovies) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className='flex flex-row justify-center gap-5 relative p-10 min-w-sm'>
      {currentPage > 1 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setPage(currentPage - 1);
          }}
          className='rounded-full border border-transparent py-2 px-4 text-base font-semibold bg-black cursor-pointer transition duration-250'>
          &lt;
        </button>
      )}
      {startPage > 1 && (
        <>
          <button
            onClick={() => setPage(1)}
            className='rounded-full border border-transparent py-2 px-4 text-base font-semibold bg-black cursor-pointer transition duration-250'>
            1
          </button>
          {startPage > 2 && <span className='text-gray-500'>...</span>}
        </>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={(e) => {
            e.preventDefault();
            setPage(number);
          }}
          className={`rounded-full border border-transparent py-2 px-4 text-base font-semibold bg-black cursor-pointer transition duration-250 ${
            currentPage === number ? 'bg-gray-500' : ''
          }`}>
          {number}
        </button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className='text-gray-500'>...</span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              setPage(totalPages);
            }}
            className='rounded-full border border-transparent py-2 px-4 text-base font-semibold bg-black cursor-pointer transition duration-250'>
            {totalPages}
          </button>
        </>
      )}
      {currentPage < totalPages && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setPage(currentPage + 1);
          }}
          className='rounded-full border border-transparent py-2 px-4 text-base font-semibold bg-black cursor-pointer transition duration-250'>
          &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;
