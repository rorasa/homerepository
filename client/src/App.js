import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row only='mobile' color='green'>
            <Col xs={3} smHidden mdHidden lgHidden>
              Title
            </Col>
            <Col xs={9} smHidden mdHidden lgHidden>
              Mobile Navigation
            </Col>
          </Row>
          <Row>
            <Col className='App-sidebar' sm={3} xsHidden>
              <Sidebar/>
            </Col>
            <Col xs={12} sm={9}>
              Main view
            </Col>
          </Row>
        </Grid>

        <div className="App-footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
