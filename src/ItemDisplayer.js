import React, { Component } from 'react';
import {  Container, Row, Col } from "reactstrap";
import './style.css';

import {FaThumbsUp} from 'react-icons/fa'
import {FaThumbsDown} from 'react-icons/fa'

class ItemDisplayer extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            name: "Nutella",
            data: ""
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
    getFormatList(type, list){
        let content = "";
        let result = [];
        if( type === "key-value"){
            for (var key in list) {
                content =  key + ": " + list[key]
                result.push(<li>{content}</li>);
            }
        }
        else if(type === "nutr-key-value"){
            for (var key in list) {
                content =  key + ": " + list[key]
                if(key == 'serving'){
                    result.unshift(<h5>{"Serving" + ": " + list[key]}</h5>);
                } else {
                    result.push(<li>{content}</li>)
                }
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
                content =   list[key]['text'] + " " + <FaThumbsUp/> + list[key]['score'];
                result.push(<li>{list[key]['text']} {(parseInt(list[key]['score'], 10) < 0 ? <FaThumbsDown/> : <FaThumbsUp/>) } {list[key]['score']}</li>);       
            }
        }

        return result;
    }
         
  render() {
      let nutritional = this.getFormatList("nutr-key-value", this.state.data['nutritional']);
      //console.log("nutritional")
      //console.log(nutritional);
      let allergens = this.getFormatList("array", this.state.data['allergens']);
      //console.log("allergens")
      //console.log(allergens);
      let recycling = this.getFormatList("key-value",this.state.data['recycling']);
      //console.log("recycling")
      //console.log(recycling);
      let opinions = this.getFormatList("score-text", this.state.data['comments']);
      let envs = this.getFormatList("array", this.state.data['environment']);
      //console.log("opinions")
      //console.log(opinions);
      let properties = [nutritional, allergens, opinions, recycling, envs]

    return (
      <div>
        <Container className="itemDisplayer">
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