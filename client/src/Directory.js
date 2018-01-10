import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class Directory extends Component {
 render(){
   return (
     <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
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
      <ul>
        <li>books
          <ul>
            <li>Printed Books
              <ul>
                <li>Fictions</li>
                <li>Non-fictions</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Movies</li>
        <li>Music</li>
        <li>Photos</li>
      </ul>
    );
  }
}

export default Directory;
