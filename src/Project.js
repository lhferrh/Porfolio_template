import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg } from "reactstrap";
import MyCarousel from "./MyCarousel";
import renderHTML from "react-render-html";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./style.css";
import "./bootstrap.css";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayer: ""
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      displayer: this.props.ppt
    });
  }

  onClick(selection) {
    console.log("Click");
    this.setState({
      displayer: selection
    });
  }

  render() {
    return (
      <div>
        <Container>
          <h2>{this.props.title}</h2>
          <Navbar color="light" light expand="md">
            <Nav className="ml-auto" navbar>
              <NavItem onclick={() => this.onClick(this.props.ppt)}>
                <NavLink onclick={() => this.onClick(this.props.ppt)}>
                  Slices
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onclick={() => this.onClick(this.props.video)}>
                  Video
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          {renderHTML(this.props.ppt)}
          <p>{this.props.description}</p>
        </Container>
      </div>
    );
  }
}

export default Project;
