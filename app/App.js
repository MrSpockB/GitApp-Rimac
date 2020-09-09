import React from "react";
import SearchBar from "./components/SearchBar";
import { findUser } from "./api";

class App extends React.Component {
  searchUser(user) {
    console.log('SEARCHING USER: ', user);
    findUser(user)
      .then(data => {
        console.log('DATA: ', data);
      })
      .catch(err => {
        console.log('ERR: ', err)
      });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSearch={this.searchUser} />
      </div>
    )
  }
}

export default App;
