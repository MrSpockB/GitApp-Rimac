import React, { useState, FunctionComponent } from "react";

interface Props {
    onSearch: (userName: string) => void,
    isLoading: boolean
}

const SearchBar: FunctionComponent<Props>  = ({ onSearch, isLoading }) => {
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
        disabled={!user || isLoading}
        onClick={() => onSearch(user)}
      >
        {isLoading ? (
            <div className="sk-chase">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        ): 'Search'}
      </button>
    </div>
  )
};

export default SearchBar;
