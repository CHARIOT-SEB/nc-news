import { useState } from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [newSearchTerm, setNewSearchTerm] = useState('');

  const handleInput = (event) => {
    const userInput = event.target.value;
    setNewSearchTerm(userInput);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm('');
  };

  return (
    <div>
      <form>
        <input id="searchBar" type="text" onChange={handleInput} />
        <button type="submit" value="Search" onClick={handleClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
