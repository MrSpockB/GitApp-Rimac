import React, { useState, FunctionComponent } from "react";
import Loader from '../Loader';

interface Props {
    onSearch: (userName: string) => void,
    isLoading: boolean,
    errMessage: string
}

const SearchBar: FunctionComponent<Props> = ({onSearch, isLoading,errMessage }) => {
  const [user, setUser] = useState('');

  return (
    <div>
      <span>Enter a Github user</span>
      <input
        type="text"
        placeholder="MrSpockB"
        onChange={(event => setUser(event.target.value))}
      />
      {!!errMessage && (
          <div className="error-message">{errMessage}</div>
      )}
      <button
        disabled={!user || isLoading}
        onClick={() => onSearch(user)}
      >
        {isLoading ? <Loader/> : 'Search'}
      </button>
    </div>
  )
};

export default SearchBar;
