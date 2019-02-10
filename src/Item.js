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
        display: 0,
        imageUrl: ""
    }

    this.handleNavClick = this.handleNavClick.bind(this);
  }
  
  componentDidMount(){
    let data = JSON.parse(this.props.match.params.id);
    //let imageUrl = './images/' + data.name,

    this.setState({
      name: data.name,
      imageUrl: data.name
    })
     
  }




  handleNavClick(feature){
      this.setState({
        display: feature
      })
  }

         
  render() {
    console.log(JSON.parse(this.props.match.params.id))
    return (
      <div>
        
        <Naveg></Naveg>
        <h1 > {this.state.name} </h1>
        <Container>
          <Row>
            <Col  md="4">
              <ItemGalery
                imageUrl={this.state.imageUrl}
              ></ItemGalery>
            </Col>
            <Col  md="8">
              <Container>
                <Row>
                  <ItemNav
                  handleNavClick={this.handleNavClick}
                  ></ItemNav>
                </Row>
                <Row>
                <ItemDisplayer
                  display={this.state.display}
                  data={JSON.parse(this.props.match.params.id)}
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