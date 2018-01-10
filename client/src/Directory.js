import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class Directory extends Component {
 render(){
   return (
     <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/directory">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>Directory</Breadcrumb.Item>
      </Breadcrumb>
      <DirectoryList/>
     </div>
   );
 }
}

class DirectoryList extends Component {
  render(){
    return (
      <div>
        <h1>Collection Directory</h1>

        <a href="/directory/books">
          <h2>Books</h2>
        </a>
        <a href="/directory/movies">
          <h2>Movies</h2>
        </a>
        <a href="/directory/music">
          <h2>Music</h2>
        </a>
        <a href="/directory/photos">
          <h2>Photos</h2>
        </a>

      </div>
    );
  }
}

export default Directory;
