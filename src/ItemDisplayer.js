import React, { Component } from 'react';
import {  Container, Row, Col } from "reactstrap";
import './style.css';

class ItemDisplayer extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            name: "Nutella",
            nutrients:{
                Calories: 100,
                Sugar: 100,
                display: 0
            },
            alergies:{
                Peanuts: "strong",
                other: "weak"
            },
            recicling:{
                Bottle: "cans bin",
                top: "landfill"
            }
        }
        this.getFormatList = this.getFormatList.bind(this);
    }

    componentDidMount(){
       
    }
    getFormatList(list){
        let content = "";
        let result = [];
        for (var key in list) {
            content =  key + ": " + list[key]
            result.push( <li>{content}</li>);
        }

        return result;
    }
         
  render() {
      let nutrients = this.getFormatList(this.state.nutrients);
      let alergies = this.getFormatList(this.state.alergies);
      let recicling = this.getFormatList(this.state.recicling);
      let properties = [nutrients, alergies, recicling]

    return (
      <div>

        <h1>{this.props.display}</h1>
        <Container>
            <Row>
                <Col>
                    <ul>
                        {properties[this.props.display]}
                    </ul>    
                </Col>
            </Row>
        </Container>

      </div>
     
    )
  }
}

export default ItemDisplayer;