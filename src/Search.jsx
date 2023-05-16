import PropTypes from 'prop-types';

const Search = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type='text'
      placeholder='Search movies'
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};
Search.propTypes = {
  searchTerm: PropTypes.string,
  handleSearch: PropTypes.func,
};
export default Search;
