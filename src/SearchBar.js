import React, { Component } from 'react';
import { MDBCol } from "mdbreact";
import { Button, Container, Row, Col } from "reactstrap";
import './style.css';
//import './bootstrap.css'

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({name: e.target.value})
    }

    handleSubmit(data) {
        console.log(this.state.name)
    }

  render() {
    //https://mdbootstrap.com/docs/react/forms/search/
    return (
      <div>
        <Container>
        <Row>
          <Col sm='10'>
            <MDBCol md="6">
              <div className="active-pink-3 active-pink-4 mb-4">
                <input onChange={this.handleChange} value={this.state.name} className="form-control" type="text" placeholder="Search" aria-label="Search" />
              </div>
            </MDBCol>
          </Col>
          <Col sm='2'>
             <Button color="primary" onClick={this.handleSubmit}>Search</Button>
          </Col>
        </Row>
        </Container>
      </div>
       
      );
  }
}

export default SearchBar ;
