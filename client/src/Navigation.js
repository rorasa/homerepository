import React, { Component } from 'react';
import { Nav, NavItem, Navbar,
  FormGroup, FormControl, Button} from 'react-bootstrap';

  class Navigation extends Component {
    render() {
      return (
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Home Repository</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/directory">
                Directory
              </NavItem>
              <NavItem eventKey={2} href="/new-entry">
                Submit new entry
              </NavItem>
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search"/>
              </FormGroup>{' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }

export default Navigation;
