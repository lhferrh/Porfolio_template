import React, { Component } from 'react';
import {  Container, Row, Col } from "reactstrap";
import ImageUploader from 'react-images-upload';
import { postImageToServer }from './api'
import './style.css';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

var prevSize = 0;

class PhotoUploader extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
         this.postImage = this.postImage.bind(this);
    }
 
    postImage(picture){
        postImageToServer(picture[0], this, (data, pointer) => {
            let json = JSON.stringify(data.data);
            pointer.props.history.push("/item/"+json);
        }, (err, pointer) => {
            console.log(err.response.status);
            pointer.props.history.push("/" + err.response.status);
        });
    }

    onDrop(picture) {
        console.log(picture.length, " vs ", prevSize);
        // if we removed
        if(picture.length <= prevSize){
            prevSize = picture.length;
            console.log("prevSize decrease/stays to ", prevSize);
            return;
        }
        // Update size
        prevSize = picture.length;
        console.log("prevSize increase to ", prevSize);
        // Ignore first part
        if(picture.length >= 2)
            picture = picture.slice(-1);
        console.log("picture: ", picture);
        this.setState({
            pictures: picture
        });
        this.postImage(picture);
    }

    render() {
        //https://www.npmjs.com/package/react-images-upload
        //https://www.npmjs.com/package/react-images-uploader
        
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Upload Image'
                            onChange={this.onDrop}
                            withPreview={true}
                            imgExtension={['.jpeg', '.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

//export default PhotoUploader ;
export default withRouter(PhotoUploader);
