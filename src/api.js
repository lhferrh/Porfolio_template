import React from 'react';
import axios from 'axios';

var postImageToServer = (picture) => {
    axios.post('http://localhost:3001/image', picture).then(
        (res) => {
            console.log(res)
        }
    ).catch( (err) => {  console.log(err)  })
}
/*
var postImageToServer = (picture) => {
    axios.post('http://localhost:3001/image', picture).then(
        (res) => {
            console.log(res)
        }
    ).catch( (err) => {  console.log(err)  })
}*/

export default postImageToServer;