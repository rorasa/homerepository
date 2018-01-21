import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class Entry extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: this.props.match.url,
      collectionName: "books",
      categoryName: "adventure",
      title: "Book Title"
    }
  }

  render(){
    return(
      <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/client/directory">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={"/client/directory/"+this.state.collectionName}>{this.state.collectionName}</Breadcrumb.Item>
        <Breadcrumb.Item href={"/client/directory/"+this.state.collectionName+"/"+this.state.categoryName}>{this.state.categoryName}</Breadcrumb.Item>
        <Breadcrumb.Item active>{this.state.title}</Breadcrumb.Item>
      </Breadcrumb>

      <h1>{this.state.title}</h1>

      </div>
    );
  }
}

export default Entry;
