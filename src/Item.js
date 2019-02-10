import React, { Component } from 'react';
import Naveg from './Nav';
import ItemGalery from './ItemGalery'
import ItemDisplayer from './ItemDisplayer'
import ItemNav from './ItemNav'
import Footer from './Footer'
import {  Container, Row, Col } from "reactstrap";




import './style.css';
import './bootstrap.css';

class Item extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
        name: "",
        display: 0,
        imageUrl: "",
        description: ""
    }

    this.handleNavClick = this.handleNavClick.bind(this);
  }
  
  componentDidMount(){
    let data = JSON.parse(this.props.match.params.id);
    //let imageUrl = './images/' + data.name,

    this.setState({
      name: data.name,
      imageUrl: data.name,
      description: data.description
    })
     
  }




  handleNavClick(feature){
      this.setState({
        display: feature
      })
  }

         
  render() {
    console.log(this.props.match.params.id)
    return (
      <div className="fill">
        
        <Naveg></Naveg>
        <div className="descriptionDisplayer">
        <h1 > {this.state.name} </h1><p>{this.state.description}</p>
        </div>
        
        <Container>
          <Row>
            <Col xs="12" md="4">
              <ItemGalery
                imageUrl={this.state.imageUrl}
              ></ItemGalery>
            </Col>
            <Col xs="12"  md="8">
              <Container className="d-none d-sm-block">
                <Row >
                  <ItemNav
                  handleNavClick={this.handleNavClick}
                  ></ItemNav>
                </Row>
                <Row >
                <ItemDisplayer
                  display={this.state.display}
                  data={JSON.parse(this.props.match.params.id)}
                ></ItemDisplayer>
                </Row>
              </Container>
              <Container className="d-block d-sm-none">
                <Row>
                  <Col xs="4">
                    <ItemNav
                    handleNavClick={this.handleNavClick}
                    ></ItemNav>
                  </Col>
                  <Col xs="8">
                  <Container>
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
            </Col>
          </Row>
        </Container>
        <Footer></Footer>

      </div>
     
    )
  }
}

export default Item;