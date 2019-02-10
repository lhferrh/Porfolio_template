import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse, NavbarToggler } from "reactstrap";

import './style.css';
import './nav.css';


//https://www.sitepoint.com/integrating-bootstrap-with-react/
class ItemNav extends Component {

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
                <Navbar color="faded" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                   

                    {/*Pull left */}
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick={() => this.props.handleNavClick(0)}  >
                                Nutritional
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.props.handleNavClick(1)}>
                                Allergens
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.props.handleNavClick(2)} >
                                Recycling
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.props.handleNavClick(3)} >
                                Opinions
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div> 
        )
    }
}

export default ItemNav ;