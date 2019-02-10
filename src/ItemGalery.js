import React, { Component } from 'react';
import { Media, Card, CardImg, } from 'reactstrap';
import './style.css';
import nutella from './images/nutella.jpg'


class ItemGalery extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      imageUrl: ""

    }
  }
  
  componentDidMount(){
    
    this.setState({
      imageUrl: this.props.imageUrl
    })
  }

         
  render() {
    let url = './images/' + this.props.imageUrl + ".jpg" ;
    console.log("Why url is empty " + url);
    let image = require("./nutella.jpg");
    return (
      
      <div>
        <h1>{url}</h1>
        <Card>
            <CardImg top width="100%" alt="Card image cap" />
        </Card>

      </div>
     
    )
  }
}

export default ItemGalery;