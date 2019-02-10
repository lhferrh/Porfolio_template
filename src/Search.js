import React, { Component } from 'react';
import Naveg from './Nav';
import SearchBar from'./SearchBar'
import PhotoUploader from './PhotoUploader'
import ThemeSwitcher from './ThemeSwitcher'

import './style.css';

class Search extends Component {
  
  constructor(props){
    super(props);

    this.state = {

    }
  }
/*
        <Nav></Nav>
        <SearchBar></SearchBar>
        <PhotoUploader></PhotoUploader>*/
         
  render() {
    return (
      <div>
        <Naveg></Naveg>
        <h1 > SMARTFOOD</h1>
        <SearchBar></SearchBar>
        <PhotoUploader></PhotoUploader>
        <ThemeSwitcher></ThemeSwitcher>

      </div>
     
    )
  }
}

export default Search;