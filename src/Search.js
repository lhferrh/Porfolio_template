import React, { Component } from 'react';
import Naveg from './Nav';
import SearchBar from'./SearchBar'
import PhotoUploader from './PhotoUploader'
import ThemeSwitcher from './ThemeSwitcher'
import Footer from './Footer'
import { Container, Row, Col } from "reactstrap";

import './style.css';
import './bootstrap.css';

class Search extends Component {
  
  constructor(props){
    super(props);

    this.state = {

    }
  }
         
  render() {
    return (
      <div className="fill">
        <Container >
            <Naveg></Naveg>
            <h1 className="d-none d-sm-block logo"> SMARTFOOD</h1>
          <SearchBar></SearchBar>
          <PhotoUploader></PhotoUploader>
          <Footer></Footer>
        </Container> 
      </div>
     
    )
  }
}

export default Search;