import React, { Component } from 'react';
import { Media, Card, CardImg, } from 'reactstrap';
import './style.css';

import nutella from './images/nutella.jpg'
import banana from './images/banana.jpg'
import redbull from './images/redbull.jpg'
import snickers from './images/snickers.jpg'
import pringles from './images/pringles.jpg'
import pizza from './images/pizza.jpg'

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
        switch(name.toLowerCase()){
            case "nutella":
                return nutella;
            case "red bull":
                return redbull;
            case "banana":
                return banana;
            case "snickers":
                return snickers;
            case "pringles":
                return pringles;
            case "pizza":
                return pizza;
            default:
                return ""
        }
    }
         
    render() {
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