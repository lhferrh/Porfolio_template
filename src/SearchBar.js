import React, { Component } from 'react';
import { MDBCol } from "mdbreact";
import { Button, Container, Row, Col } from "reactstrap";
import './style.css';
//import './bootstrap.css'
import { withRouter } from 'react-router-dom';

import axios from 'axios';

var postNameToServer = (name, pointer,  callback) => {
    axios.get('http://10.42.0.117:3001/name', { params: {"name": name}}).then(
        (res) => {
            console.log("Promise");
            console.log(res)
            return callback(res, pointer)
        }
    ).catch( (err) => {  console.log(err); return err; })
}

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
        let res = postNameToServer(this.state.name, this, function(data, pointer){
            console.log("Final Result");
            console.log(data.data);
            let json = JSON.stringify(data.data);
            let path = "/item/"+json;
            console.log(pointer.props.history) //.push(res);
            pointer.props.history.push(path);
            return path;
        });
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

//export default SearchBar ;
export default withRouter(SearchBar);