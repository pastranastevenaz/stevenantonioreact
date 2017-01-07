import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  Navbar,
  NavItem,
  Nav
} from 'react-bootstrap'
import './Navigate.css';

export default class Navigate extends Component {
  render() {
    return (
      <Navbar id="navigator" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Steven Antonio</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* <Nav> */}
            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown> */}
          {/* </Nav> */}
          <Nav pullRight>
            <NavItem eventKey={1} href="#"><Link to="About">About</Link></NavItem>
            <NavItem eventKey={3} href="#"><Link to="Blog">Blog</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to="Learn">Learn</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
}
