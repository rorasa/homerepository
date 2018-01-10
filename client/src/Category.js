import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: this.props.match.url,
      collectionName: this.props.match.url.split('/').slice(-2,-1),
      categoryName: this.props.match.params.categoryName
    };
  }

  render(){
    return(
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/directory">Home</Breadcrumb.Item>
          <Breadcrumb.Item href={"/directory/"+this.state.collectionName}>{this.state.collectionName}</Breadcrumb.Item>
          <Breadcrumb.Item href="#" active>{this.state.categoryName}</Breadcrumb.Item>
        </Breadcrumb>

        <h1>{this.state.categoryName}</h1>
        Listing
      </div>
    );
  }
}

export default Category;
