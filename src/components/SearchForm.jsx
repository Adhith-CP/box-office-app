import { useState, useEffect } from "react";
const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchOption, setSearchOption] = useState("shows");
  const onSearchInputChange = (e) => {
    setSearchStr(e.target.value);
  };

  useEffect(() => {
    console.log("SEARCH OPTION CHANGES", searchOption );

    return () => {
      console.log("SEARCH OPTION CHANGES", searchOption);
    };
  }, [searchOption]);

  const onRadioChnage = (e) => {
    setSearchOption(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />

      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === "shows"}
          onChange={onRadioChnage}
        />
      </label>

      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === "actors"}
          onChange={onRadioChnage}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
