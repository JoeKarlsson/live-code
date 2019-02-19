import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
console.log("useState", useState);

function Example() {
  // Declare a new state variable, which we'll call "count"
  console.log("useState(0)", useState(0));
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Example />
          <ExampleTwo />
        </header>
      </div>
    );
  }
}

export default App;
