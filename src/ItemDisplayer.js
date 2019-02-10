import React, { Component } from 'react';
import {  Container, Row, Col } from "reactstrap";
import './style.css';

class ItemDisplayer extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            name: "Nutella",
            data: "",
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
        this.setState(
            {
                data: this.props.data
            }
        )
        console.log("We got the information")
        console.log(this.props.data);
        console.log(this.state.data);
       
    }
    getFormatList( type, list){
        let content = "";
        let result = [];
        if( type === "key-value"){
            for (var key in list) {
                content =  key + ": " + list[key]
                result.push( <li>{content}</li>);
            }
        }
        else if( type === "array"){
            for (var key in list) {
                content =  list[key]
                result.push( <li>{content}</li>);
            }
        }
        else if( type === "score-text"){
            for (var key in list) {
                content =   list[key]['text'] + " " + list[key]['score'];
                result.push( <li>{content}</li>);
            }
        }
       

        return result;
    }
         
  render() {
      let nutritional = this.getFormatList("key-value", this.state.data['nutritional']);
      //console.log("nutritional")
      //console.log(nutritional);
      let allergens = this.getFormatList("array", this.state.data['allergens']);
      //console.log("allergens")
      //console.log(allergens);
      let recycling = this.getFormatList("key-value",this.state.data['recycling']);
      //console.log("recycling")
      //console.log(recycling);
      let opinions = this.getFormatList("score-text", this.state.data['comments']);
      //console.log("opinions")
      //console.log(opinions);
      let properties = [nutritional, allergens, recycling, opinions]

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