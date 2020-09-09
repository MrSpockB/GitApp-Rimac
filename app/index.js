import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World</h1>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}

ReactDOM.render(<App name="Paco" />, document.getElementById('app'));
