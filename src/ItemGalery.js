import React, { Component } from 'react';
import { Media, Card, CardImg, } from 'reactstrap';
import './style.css';
import nutella from './images/nutella.jpg'

import nutella from './images/nutella.jpg'
import banana from './images/banana.jpg'
import redbull from './images/red\ bull.jpg'
import snickers from './images/snickers.jpg'
import { Switch } from '@material-ui/core';


class ItemGalery extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      imageUrl: ""

    }

    this.getTheImage = this.getTheImage.bind(this)
  }
  
  componentDidMount(){
    
    this.setState({
      imageUrl: this.props.imageUrl
    })
  }

  getTheImage(name){
    let res = "";
    switch(name){
      case "nutella":
        res = nutella;
        break;
      case "red bull":
        res = redbull;
        break;
      case "banana":
        res = banana;
        break;
      case "snickers":
        res = snickers;
        break;

    }
     return res;
  }
         
  render() {
    let url = './images/' + this.props.imageUrl + ".jpg" ;
    console.log("Why url is empty " + url);
    let image = require("./nutella.jpg");
    let myImage = this.getTheImage(this.props.imageUrl);
    return (
      
      <div>
        
        <Card>
            <CardImg top width="100%" src={myImage} alt="Card image cap" />
        </Card>

      </div>
     
    )
  }
}

export default ItemGalery;