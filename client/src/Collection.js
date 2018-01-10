import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { BrowserRouter as Router,
  Route, Link} from 'react-router-dom';

import Directory from './Directory';
import Category from './Category';

class Collection extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: this.props.match.url,
      collectionName: this.props.match.params.collectionName
    };
  }

  render(){
    return (
      <Router>
        <div>
          <Route exact path={this.state.url}
            render={()=>{return (
              <CollectionList collectionName={this.state.collectionName} baseUrl={this.state.url}/>
            )}}/>
          <Route path={this.state.url+"/:categoryName" } component={Category}/>
        </div>
      </Router>
    );
  }
}

class CollectionList extends Component {
  render(){
    return (
      <div>
       <Breadcrumb>
         <Breadcrumb.Item href="/directory">Home</Breadcrumb.Item>
         <Breadcrumb.Item href="#" active>{this.props.collectionName}</Breadcrumb.Item>
       </Breadcrumb>

       <h1>{this.props.collectionName}</h1>
       <ul>
        <li>
          <a href={this.props.baseUrl+"/fictions"}>Subcollection</a>
          <ul>
            <li><a href={this.props.baseUrl+"/adventure"}>Category</a></li>
            <li><a href={this.props.baseUrl+"/action"}>Category</a></li>
            <li><a href={this.props.baseUrl+"/scifi"}>Category</a></li>
          </ul>
        </li>
        <li>
          <a href={this.props.baseUrl+"/non-fictions"}>Subcollection</a>
        </li>
       </ul>
      </div>
    );
  }
}

export default Collection;
