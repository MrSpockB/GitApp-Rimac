import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/milligram/dist/milligram.min.css";

import SearchBar from "./components/SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
