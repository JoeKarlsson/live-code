import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidMount(nextProps) {
      console.log("Current props: ", this.props);
      console.log("Next props: ", nextProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  };
}

const testComponent = props => {
  return <div>Hello World</div>;
};

class App extends Component {
  componentDidMount() {
    const EnhancedComponent = logProps(testComponent);
  }
  render() {
    const EnhancedComponent = logProps(testComponent);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <EnhancedComponent />
        </div>
      </div>
    );
  }
}

export default App;
