import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,
  Route, Link} from 'react-router-dom';

import Navigation from './Navigation';
import Login from './Login';
import Collection from './Collection';
import Directory from './Directory';
import Entry from './Entry';
import Sidebar from './Sidebar';
import AdminMain from './admin/AdminMain';
import AdminCollection from './admin/AdminCollection';
import AdminStorage from './admin/AdminStorage';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>

        <Router>
          <div className="container">
            <Route exact path="/" component={NA}/>
            <Route exact path="/client" component={Login}/>
            <Route exact path="/client/directory" component={Directory}/>
            <Route exact path="/client/new-entry" component={Sidebar}/>
            <Route path="/client/directory/:collectionName" component={Collection}/>
            <Route path="/client/entry/:entryId" component={Entry}/>
            <Route exact path="/client/admin" component={AdminMain}/>
            <Route exact path="/client/admin/collection" component={AdminCollection}/>
            <Route exact path="/client/admin/storage" component={AdminStorage}/>
          </div>
        </Router>

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
