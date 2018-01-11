import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router,
  Route, Link} from 'react-router-dom';

import Navigation from './Navigation';
import Login from './Login';
import Collection from './Collection';
import Directory from './Directory';
import Sidebar from './Sidebar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Grid fluid>
          <Row>
            <Col className='App-sidebar' sm={3} xsHidden>
              <Sidebar/>
            </Col>
            <Col xs={12} sm={9}>
              <Router>
                <div>
                  <Route exact path="/" component={NA}/>
                  <Route exact path="/client" component={Login}/>
                  <Route exact path="/client/directory" component={Directory}/>
                  <Route exact path="/client/new-entry" component={Sidebar}/>
                  <Route path="/client/directory/:collectionName" component={Collection}/>
                  <Route path="/client/entry/:entryId" component={Sidebar}/>
                </div>
              </Router>
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

const NA = () =>{
  return (
    <div>
      <strong>Not Available</strong>
      <p>This path is to be supplied by Express Server, which is not available</p>
    </div>
  );
}

export default App;
