import { GoSearch } from "react-icons/go";

const Searchbar = () => {
  return (
    <div className="search-wrapper">
      <form
        className="search-form"
        action="https://www.duckduckgo.com/"
        method="get"
      >
        <input
          className="search-input"
          type="text"
          name="q"
          placeholder="Search the web without being tracked"
        />
        <button className="search-button" type="submit">
          <GoSearch size={"20px"} style={{ alignSelf: "center" }} />
        </button>
      </form>
    </div>
  );
};

export { Searchbar };
