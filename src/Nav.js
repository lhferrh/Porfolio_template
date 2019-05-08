import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavbarToggler
} from "reactstrap";

import "./style.css";
import "./bootstrap.css";
import "./nav.css";

//https://www.sitepoint.com/integrating-bootstrap-with-react/
class Naveg extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="paleGrey" color="faded" light expand="md">
          {/* Brandname */}
          <NavbarBrand className="" href="/">
            RUBEN ROMERO
          </NavbarBrand>
          {/* Add toggler to auto-collapse */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/*Pull left */}
            <Nav className="ml-auto" navbar>
              <NavItem className="buttonS">
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem className="buttonS">
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem className="buttonS">
                <NavLink href="#">DataBase</NavLink>
              </NavItem>
              <NavItem className="buttonS">
                <NavLink href="#">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Naveg;
