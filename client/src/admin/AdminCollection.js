import React, { Component } from 'react';
import '../css/fontawesome-all.css';

class AdminCollection extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Manage Collections</h1>

        <AdminCollectionItem/>
        <AdminCollectionItem/>
        <AdminCollectionItem/>

        <i className="fas fa-plus"></i>&nbsp;
        <strong>New Collection</strong>

      </div>
    );
  }
}

class AdminCollectionItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleCategory: false
    };

    this.toggleCategory = this.toggleCategory.bind(this);
  }

  toggleCategory(){
    this.setState(prevState => ({
      toggleCategory: !prevState.toggleCategory
    }));
  }

  render(){
    const showCollapse = this.state.toggleCategory?"collapse.show":"collapse";
    const collapseArrow = this.state.toggleCategory?"fas fa-angle-down fa-lg":"fas fa-angle-right fa-lg";

    return(
      <div>
        <p>
          <a onClick={this.toggleCategory}>
            <i className={collapseArrow}></i>&nbsp;
            <strong>Books</strong>
          </a>&nbsp;
          <i className="far fa-edit fa-lg"></i>&nbsp;
          <i className="fas fa-trash fa-lg"></i>
        </p>
        <div className={showCollapse} id="entry1">
          <ul>
            <li>
              Fictions &nbsp;
              <i className="far fa-edit"></i>&nbsp;
              <i className="fas fa-trash"></i>
            </li>
            <li>
              Non-fictions &nbsp;
              <i className="far fa-edit"></i>&nbsp;
              <i className="fas fa-trash"></i>
            </li>
            <li>
              <i className="fas fa-plus fa-sm"></i>&nbsp;
              New Category
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminCollection;
