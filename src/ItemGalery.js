import React, { Component } from 'react';
import { Media, Card, CardImg, } from 'reactstrap';
import './style.css';

class ItemGalery extends Component {
  
  constructor(props){
    super(props);

    this.state = {

    }
  }
/*<Media>
            <Media left href="./image.jpg">
                <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
            </Media>
            <Media body>
                <Media heading>
                Media heading
                </Media>
            </Media>
        </Media>*/
         
  render() {
    return (
      <div>
        <Card>
            <CardImg top width="100%" src="./image.jpg" alt="Card image cap" />
        </Card>

      </div>
     
    )
  }
}

export default ItemGalery;