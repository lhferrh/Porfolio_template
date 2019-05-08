import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import "./style.css";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <Naveg />
        <h2> Not Found </h2>
      </div>
    );
  }
}

export default Item;
