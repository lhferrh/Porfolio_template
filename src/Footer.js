import React, { Component } from 'react';
import {  Container, Row, Col } from "reactstrap";
import {Breadcrumb, BreadcrumbItem,  Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse, NavbarToggler } from "reactstrap";

import './style.css';

class Footer extends Component {
  
  constructor(props){
    super(props);

  }

         
  render() {
    return (
      <div>
          <Container>
              <Row className="">
                <Col  className="" md={{ size: 6, offset: 3 }}>
                    <Breadcrumb className="">
                        <BreadcrumbItem className="buttonS"><a href="#">About us</a></BreadcrumbItem>
                        <BreadcrumbItem className="buttonS"><a href="#">App</a></BreadcrumbItem>
                        <BreadcrumbItem className="buttonS"><a href="#">Contact</a></BreadcrumbItem>
                        <BreadcrumbItem className="buttonS"><a href="#">Careers</a></BreadcrumbItem>
                    </Breadcrumb>
                </Col>
              </Row>
          </Container>
    
      </div>
     
    )
  }
}

export default Footer;