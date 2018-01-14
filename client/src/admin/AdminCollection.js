import React, { Component } from 'react';
import '../css/fontawesome-all.css';
import { Modal,
  FormGroup, FormControl, ControlLabel,
  Checkbox, Button } from 'react-bootstrap';

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

        <NewCollectionModal/>

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

class NewCollectionModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      isShowed: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose() {
    this.setState({ isShowed: false });
  }

  handleOpen() {
    this.setState({ isShowed: true });
  }

  render(){
    return (
      <div>
        <i className="fas fa-plus"></i>&nbsp;
        <a onClick={this.handleOpen}><strong>New Collection</strong></a>

        <Modal show={this.state.isShowed} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create new collection</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="NewCollection">
                <ControlLabel>
                  Collection name
                </ControlLabel>
                <FormControl
                  type="text"
                  value={null}
                  placeholder="Collection name"
                  onChange={null}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  Options
                </ControlLabel>
                <Checkbox>
                  Private collection
                </Checkbox>
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  Storage options
                </ControlLabel>
                <FormControl componentClass="select" placeholder="Select storage">
                  <option value={null}>Disk 1</option>
                  <option value={null}>Disk 2</option>
                  <option value={null}>Disk 3</option>
                  <option value={null}>Add new storage</option>
                </FormControl>
                <Checkbox>
                  Encrypt storage
                </Checkbox>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary">Create</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AdminCollection;
