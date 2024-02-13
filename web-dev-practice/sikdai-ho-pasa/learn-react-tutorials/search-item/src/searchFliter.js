// src/SearchFilter.js
import React, { useState } from 'react';
import items from './data';

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleSearchClick = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase() === searchQuery.toLowerCase()
    );

    setSearchResults(filteredItems);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <button onClick={handleSearchClick}>Search</button>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>{item.phoneNumber}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchFilter;
