import React, { Component } from 'react';
import Naveg from './Nav';
import SearchBar from'./SearchBar'
import PhotoUploader from './PhotoUploader'
import ThemeSwitcher from './ThemeSwitcher'
import MyInfoDisplayer from './MyInfoDisplayer'
import Footer from './Footer'
import { Container, Row, Col } from "reactstrap";

import './style.css';
import './bootstrap.css';

class WorkExperience extends Component {
  
  constructor(props){
    super(props);

    this.state = {

    }
  }
         
  render() {
    return (
      <div className="fill">
        <Container >
            <MyInfoDisplayer></MyInfoDisplayer>
          <Footer></Footer>
        </Container> 
      </div>
     
    )
  }
}

export default WorkExperience;