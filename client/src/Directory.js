import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class Directory extends Component {
 render(){
   return (
     <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/client/directory">Home</Breadcrumb.Item>
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

        <a href="/client/directory/books">
          <h2>Books</h2>
        </a>
        <a href="/client/directory/movies">
          <h2>Movies</h2>
        </a>
        <a href="/client/directory/music">
          <h2>Music</h2>
        </a>
        <a href="/client/directory/photos">
          <h2>Photos</h2>
        </a>

      </div>
    );
  }
}

export default Directory;
