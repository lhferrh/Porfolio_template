import React, { Component } from 'react';
import { Media, Card, CardImg, } from 'reactstrap';
import './style.css';

class ItemGalery extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      imageUrl: ""

    }
  }
  
  componentDidMount(){
    
    this.setState({
      imageUrl: this.props.imageUrl
    })
  }

         
  render() {
    let url = './images/' + this.props.imageUrl + ".jpg" ;
    return (
      <div>
        <h1>{url}</h1>
        <Card>
            <CardImg top width="100%" src="./images/nutella.jpg" alt="Card image cap" />
        </Card>

      </div>
     
    )
  }
}

export default ItemGalery;