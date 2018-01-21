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
          <i className="far fa-edit"></i>&nbsp;
          <DeleteModal/>
        </p>
        <div className={showCollapse} id="entry1">
          <ul>
            <li>
              Fictions &nbsp;
              <i className="far fa-edit"></i>&nbsp;
              <DeleteModal/>
            </li>
            <li>
              Non-fictions &nbsp;
              <i className="far fa-edit"></i>&nbsp;
              <DeleteModal/>
            </li>
            <li>
              <NewCatagoryModal/>
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
      isShowed: false,
      collectionName: null,
      isPrivateCheck: false,
      storageName: "Select storage",
      isStorageEncrypted: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ isShowed: false });
  }

  handleOpen() {
    this.setState({ isShowed: true });
  }

  handleSubmit(e) {
    console.log("Submiting");
    e.preventDefault();

    let payload = {
      foo: "Hello ",
      bar: this.state.collectionName,
      zoo: this.state.isPrivateCheck,
      hxa: this.state.storageName,
      xee: this.state.isStorageEncrypted
    };

    fetch("/api/category", {
      method: 'post',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(payload)
    }).then((res)=>{
      console.log(res);
    }).catch((res)=>{
      console.log(res);
    });
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
                  value={this.state.collectionName}
                  placeholder="Collection name"
                  onChange={(e)=>{this.setState({
                    collectionName: e.target.value
                  })}}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  Options
                </ControlLabel>
                <Checkbox
                  onClick={(e)=>{this.setState( prevState => ({
                    isPrivateCheck: !prevState.isPrivateCheck
                  }))}}
                >
                  Private collection
                </Checkbox>
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  Storage options
                </ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder={this.state.storageName}
                  value={this.state.storageName}
                  onChange={(e)=>{
                    this.setState({ storageName: e.target.value})
                  }}
                >
                  <option value="Disl 1">Disk 1</option>
                  <option value="Disk 2">Disk 2</option>
                  <option value="Disk 3">Disk 3</option>
                  <option value={null}>Add new storage</option>
                </FormControl>
                <Checkbox
                  onClick={(e)=>{this.setState( prevState =>({
                    isStorageEncrypted: !prevState.isStorageEncrypted
                  }))}}
                >
                  Encrypt storage
                </Checkbox>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit} bsStyle="primary">Create</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

class NewCatagoryModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowed: false
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose(){
    this.setState({ isShowed: false });
  }

  handleOpen(){
    this.setState({ isShowed: true });
  }

  render(){
    return(
      <div>
        <i className="fas fa-plus fa-sm"></i>&nbsp;
        <a onClick={this.handleOpen}>New Category</a>
        <Modal show={this.state.isShowed} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create new category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="NewCategory">
                <ControlLabel>
                  Category name
                </ControlLabel>
                <FormControl
                  type="text"
                  value={null}
                  placeholder="Category name"
                  onChange={null}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  Create this category under
                </ControlLabel>
                <FormControl componentClass="select" placeholder="Books">
                  <option value={null}>Books</option>
                  <option value={null}>--Category A</option>
                  <option value={null}>--Category B</option>
                </FormControl>
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

class DeleteModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowed: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose(){
    this.setState({ isShowed: false });
  }

  handleOpen(){
    this.setState({ isShowed: true });
  }

  render(){
    return (
      <span>
        <a onClick={this.handleOpen}>
          <i className="fas fa-trash"></i>
        </a>

        <Modal show={this.state.isShowed} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Would you like to delete this? This cannot be undone.
            <form>
              <FormGroup>
                <ControlLabel>
                  To proceed, type in the collection name here.
                </ControlLabel>
                <FormControl
                  type="text"
                  value={null}
                  placeholder="Think twice!"
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger">Delete</Button>
            <Button onClick={this.handleClose}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

export default AdminCollection;
