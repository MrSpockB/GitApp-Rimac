import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/milligram/dist/milligram.min.css";

import SearchBar from "./components/SearchBar";

class App extends React.Component {

  searchUser(user) {
    console.log('SEARCHING USER: ', user);
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSearch={this.searchUser} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
