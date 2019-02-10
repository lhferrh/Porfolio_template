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

        this.state = {}
    }
  
    componentDidMount(){
        this.setState({})
    }

    render() {
        return (
        <div>
            <Naveg></Naveg>
            <h2> Not Found </h2>
        </div>
        )
    }
}

export default Item;