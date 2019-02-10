import React, { Component } from 'react';
import {  Container, Row, Col } from "reactstrap";
import ImageUploader from 'react-images-upload';
import './style.css';

class PhotoUploader extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
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