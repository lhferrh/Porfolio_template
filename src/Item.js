import React, { Component } from 'react';
import Naveg from './Nav';
import ItemGalery from './ItemGalery'
import ItemDisplayer from './ItemDisplayer'
import ItemNav from './ItemNav'
import Footer from './Footer'
import {  Container, Row, Col } from "reactstrap";




import './style.css';

class Item extends Component {
  
  constructor(props){
    super(props);

    this.state = {
        name: "",
        display: 0

    }

    this.handleNavClick = this.handleNavClick.bind(this);
  }
  
  handleNavClick(feature){
      this.setState({
        display: feature
      })
  }

         
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        <h1>{this.state.display}</h1>
        <Naveg></Naveg>
        <h1 > {this.state.name} </h1>
        <Container>
          <Row>
            <Col>
              <ItemGalery></ItemGalery>
            </Col>
            <Col>
              <Container>
                <Row>
                  <ItemNav
                  handleNavClick={this.handleNavClick}
                  ></ItemNav>
                </Row>
                <Row>
                <ItemDisplayer
                  display={this.state.display}
                ></ItemDisplayer>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>

      </div>
     
    )
  }
}

export default Item;