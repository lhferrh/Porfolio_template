import React from 'react';
import axios from 'axios';

const baseURL = "http://10.42.0.117:3001"

export function postImageToServer(picture, pointer,  callback) {
    console.log(picture);
    let data = new FormData();
    data.append("file",picture);
    axios.post(baseURL + '/image', data).then((res) => {
            console.log("Promise");
            console.log(res)
            return callback(res, pointer)
        }
    ).catch((err) => {  
        console.log(err); return err; 
    })
}

export function postNameToServer(name, pointer,  callback) {
    axios.get(baseURL + '/name', { params: {"name": name}}).then(
        (res) => {
            console.log("Promise");
            console.log(res)
            return callback(res, pointer)
        }
    ).catch((err) => {
        console.log(err); return err; 
    })
}
