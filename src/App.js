import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import Navbar from 'react-bootstrap';
import Nav from 'react-bootstrap';
import NavItem from 'react-bootstrap';
import NavDropdown from 'react-bootstrap';
import MenuItem from 'react-bootstrap';
import Navigate from './Navigate';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigate />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
