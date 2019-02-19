import React, { PureComponent, Suspense } from "react";
import api from "./api.js";
import logo from "./logo.svg";
import "./App.css";
const List = React.lazy(() => import("./List"));
// import List from "./List";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      planets: []
    };
    this.getPlanets = this.getPlanets.bind(this);
  }

  getPlanets() {
    const url = "https://swapi.co/api/planets/";
    const options = {
      method: "GET"
    };

    api(url, options)
      .then(data => {
        this.setState({
          planets: data.results
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getPlanets();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Suspense Demo</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <List planets={this.state.planets} />
          </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
