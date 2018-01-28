import React, { Component } from 'react';
import '../css/fontawesome-all.css';
import { Modal, Table,
  FormGroup, FormControl, ControlLabel,
  Alert,
  Checkbox, Button } from 'react-bootstrap';

class AdminStorage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Manage Storages</h1>

        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Storage name</th>
              <th>Storage Path</th>
              <th>Free Space</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>book1</td>
              <td>/dev/sdb1</td>
              <td>670.55GB/1000GB (67%)</td>
              <td>online</td>
              <td><i className="far fa-edit"></i>&nbsp;
                <DeleteModal/>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>2</td>
              <td>am1</td>
              <td>/dev/sdc1</td>
              <td>870.40GB/1000GB (87%)</td>
              <td>offline</td>
              <td><i className="far fa-edit"></i>&nbsp;
                <DeleteModal/>
              </td>
            </tr>
          </tbody>
        </Table>

        <NewStorageModal/>

      </div>
    );
  }
}

class NewStorageModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowed: false,
      storageName: null,
      storagePath: null,
      showAlert: false,
      alertStyle: 'success',
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose(){
    this.setState({ isShowed: false });
  }

  handleOpen(){
    this.setState({ isShowed: true });
  }

  handleSubmit(){
    return
  }

  render(){
    return (
      <div>
        <StorageAlert style={this.state.alertStyle} show={this.state.showAlert}/>
        <a onClick={this.handleOpen}>
          <i className="fas fa-plus"></i>&nbsp;Add new storage
        </a>

        <Modal show={this.state.isShowed} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create new storage</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="NewStorage">
                <ControlLabel>
                  Storage name
                </ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.storageName}
                  placeholder="Friendly storage name"
                  onChange={(e)=>{this.setState({
                    storageName: e.target.value
                  })}}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  Storage path
                </ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.storagePath}
                  placeholder="Absolute path or url"
                  onChange={(e)=>{this.setState({
                    storagePath: e.target.value
                  })}}
                />
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
                  To proceed, type in the storage name here.
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

class StorageAlert extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowed: props.show,
      style: props.style
    }

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(){
    this.setState({
      isShowed: false
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      isShowed: nextProps.show,
      style: nextProps.style
    });
  }

  render(){
    const successAlert = (
      <Alert bsStyle="success" onDismiss={this.onDismiss}>
        New storage added succussfully.
      </Alert>
    );
    const failedAlert = (
      <Alert bsStyle="danger" onDismiss={this.onDismiss}>
        Failed to add a new storage.
      </Alert>
    );

    if (this.state.isShowed){
      if (this.state.style === "success"){
        return successAlert;
      }else{
        return failedAlert;
      }
    }else{
      return null;
    }
  }
}

export default AdminStorage;
