import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
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
import Naveg from "./Nav";
import { SocialIcon } from "react-social-icons";
/*<SocialIcon url="https://www.linkedin.com/in/rubenromerocs" />
                    <SocialIcon url="https://github.com/lhferrh" />*/
import "./style.css";
import "./bootstrap.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Naveg />
        <Container>
          <Row className="black ">
            <Container>
              <h1 className="d-none d-sm-block logo"> Ruben Romero</h1>
              <ul className="socialList text-center">
                <li>
                  <img
                    className="generalHover"
                    src="./images/linkedin_grey.png"
                    href="https://www.linkedin.com/in/rubenromerocs"
                  />
                  <a href="https://www.linkedin.com/in/rubenromerocs" />
                </li>
                <li>
                  <img
                    className="generalHover"
                    src="./images/github.png"
                    href="https://github.com/lhferrh"
                  />
                  <a href="https://github.com/lhferrh" />
                </li>
                <li>
                  <img
                    className="generalHover"
                    src="./images/gmail_grey.png"
                    href="rromerohernandez@ucdavis.edu"
                  />
                  <a />
                </li>
              </ul>
            </Container>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navigation;
