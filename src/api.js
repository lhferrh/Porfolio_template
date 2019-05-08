import React from 'react';
import axios from 'axios';

const baseURL = "http://0.0.0.0:3001"

export function postImageToServer(picture, pointer,  resolve, reject) {
    console.log(picture);
    let data = new FormData();
    data.append("file",picture);
    axios.post(baseURL + '/image', data).then((res) => {
            console.log("Promise");
            console.log(res)
            return resolve(res, pointer)
        }
    ).catch((err) => {
        console.log(err);
        return reject(err, pointer); 
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
