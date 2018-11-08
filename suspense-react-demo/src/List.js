import React, { Component, PureComponent } from "react";
import "./App.css";

class Item extends PureComponent {
  render() {
    return (
      <div>
        <h3>{this.props.planet.name}</h3>
      </div>
    );
  }
}

class List extends Component {
  render() {
    const itemNode = this.props.planets.map(planet => {
      return <Item planet={planet} key={planet.created} />;
    });
    return <div>{itemNode}</div>;
  }
}

export default List;
