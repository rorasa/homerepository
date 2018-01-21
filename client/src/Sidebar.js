import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img src="http://via.placeholder.com/200x200"/>
        </div>
        <div>
          Home Repository 2.0
        </div>
        <ul className="nav">
          <li>Books
            <ul>
              <li>Printed books
                <ul>
                  <li>Fictions</li>
                  <li>Nonfictions</li>
                </ul>
              </li>
              <li>Ebooks</li>
            </ul>
          </li>
          <li>Movies</li>
          <li>Music</li>
          <li>Photos</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
