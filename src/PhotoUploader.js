import React, { Component } from 'react';
import {  Container, Row, Col } from "reactstrap";
import ImageUploader from 'react-images-upload';
//import { postImageToServer }from './api'
import './style.css';

import axios from 'axios';

var postImageToServer = (picture, callback) => {
    console.log(picture);
    let data = new FormData();
    data.append("file",picture);
    axios.post('http://10.42.0.117:3001/image', data).then(
        (res) => {
            console.log("result");
            console.log(res)
            callback(res)
        }
    ).catch( (err) => {  console.log(err); return err; })
}



class PhotoUploader extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
         this.postImage = this.postImage.bind(this);
    }
 
    postImage(picture){
        let res = postImageToServer(picture[0], function(data){
            console.log(data.data);
        });
    }

    onDrop(picture) {
        console.log(picture);
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        this.postImage(picture);
    }

    render() {
        //https://www.npmjs.com/package/react-images-upload
        //https://www.npmjs.com/package/react-images-uploader
        
        return (
            <div>
                <h1>The image is {(this.state.pictures[0])?this.state.pictures[0]['name']: "empty"}</h1>
                <Container>
                    <Row>
                        <Col>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Upload Image'
                            onChange={this.onDrop}
                            withPreview={true}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                        </Col>
                    </Row>
                </Container>
               
            </div>
           
        );
    }
}

export default PhotoUploader ;