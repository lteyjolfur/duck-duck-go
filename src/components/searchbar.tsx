import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
  return (
    <div className="search-wrapper">
      <form
        className="search-form"
        action="https://www.duckduckgo.com/"
        method="get"
        role="search"
        aria-label="Site search"
      >
        <input
          id="search-input"
          className="search-input"
          type="text"
          name="q"
          placeholder="Search the web without being tracked"
          aria-label="Search the web without being tracked"
        />
        <button className="search-button" type="submit" aria-label="Search">
          <FaSearch
            size={'20px'}
            style={{ alignSelf: 'center' }}
            aria-hidden="true"
          />
        </button>
      </form>
    </div>
  );
};

export { Searchbar };
