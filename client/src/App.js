import React, { Component } from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Grid } from 'semantic-ui-react';
import Sidebar from './Sidebar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Grid.Row only='mobile' color='green'>
            <Grid.Column width={4}>
              Title
            </Grid.Column>
            <Grid.Column width={12}>
              Mobile Navigation
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column className='App-sidebar' width={4} only='computer tablet'>
              <Sidebar />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={12}>
              Main view
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
