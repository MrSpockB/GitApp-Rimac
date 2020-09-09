import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [user, setUser] = useState('');

  return (
    <div>
      <span>Enter a Github user</span>
      <input
        type="text"
        placeholder="MrSpockB"
        onChange={(event => setUser(event.target.value))}
      />
      <button
        disabled={!user}
        onClick={() => onSearch(user)}
      >
        Search
      </button>
    </div>
  )
};

export default SearchBar;
