import React, { Component } from 'react';
import {  Container, Row, Col } from "reactstrap";
import ImageUploader from 'react-images-upload';
//import { postImageToServer }from './api'
import './style.css';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

var postImageToServer = (picture, pointer,  callback) => {
    console.log(picture);
    let data = new FormData();
    data.append("file",picture);
    axios.post('http://10.42.0.117:3001/image', data).then(
        (res) => {
            console.log("Promise");
            console.log(res)
            return callback(res, pointer)
        }
    ).catch( (err) => {  console.log(err); return err; })
}

var prevSize = 0;

class PhotoUploader extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
         this.postImage = this.postImage.bind(this);
    }
 
    postImage(picture){
        let res = postImageToServer(picture[0],this,  function(data, pointer ){
            console.log("Final Result");
            console.log(data.data);
            let json = JSON.stringify(data.data);
            let path = "/item/"+json;
            console.log(pointer.props.history) //.push(res);
            pointer.props.history.push(path);
            return path;
        });
        
        console.log("outside");
        console.log(res);
        //this.props.history.push(res);
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

//export default PhotoUploader ;
export default withRouter(PhotoUploader);