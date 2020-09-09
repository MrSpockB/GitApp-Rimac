import React from "react";
import SearchBar from "./components/SearchBar";
import { findUser } from "./api";

class App extends React.Component {
  state = {
    usersData: {},
    errMessage: ''
  };

  searchUser = (user) => {
    findUser(user)
      .then(data => {
        console.log('DATA: ', data);

      })
      .catch(err => {
        let errMessage = err.message;
        if (err.message === "Not Found") {
          errMessage = 'User not found'
        }
        this.setState({ errMessage: errMessage });
      });
  };

  render() {
    const { errMessage } = this.state;
    return (
      <div className="container">
        <SearchBar onSearch={this.searchUser} />
        {!!errMessage && (
          <span>{errMessage}</span>
        )}
      </div>
    )
  }
}

export default App;
