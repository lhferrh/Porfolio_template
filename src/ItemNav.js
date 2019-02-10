import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse, NavbarToggler } from "reactstrap";

import './style.css';
import './nav.css';


//https://www.sitepoint.com/integrating-bootstrap-with-react/
class ItemNav extends Component {

    constructor(props) {
        super(props);
    
       
        this.state = {
          isOpen: false
        };
      }
 
    render() {
        return (
            <div>
                <Navbar className="paleGrey" color="faded" light expand="md">
                    
                
                    {/*Pull left */}
                    <Nav className="ml-auto" navbar>
                        <NavItem className="buttonS">
                            <NavLink onClick={() => this.props.handleNavClick(0)}  >
                                Nutritional
                            </NavLink>
                        </NavItem>
                        <NavItem  className="buttonS">
                            <NavLink onClick={() => this.props.handleNavClick(1)}>
                                Allergens
                            </NavLink>
                        </NavItem>
                        <NavItem className="buttonS">
                            <NavLink onClick={() => this.props.handleNavClick(2)} >
                                Opinions
                            </NavLink>
                        </NavItem>
                        <NavItem className="buttonS">
                            <NavLink onClick={() => this.props.handleNavClick(3)} >
                                Recycling
                            </NavLink>
                        </NavItem>
                        <NavItem className="buttonS">
                            <NavLink onClick={() => this.props.handleNavClick(4)} >
                                Ecological Impact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div> 
        )
    }
}

export default ItemNav ;