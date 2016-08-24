// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    return (
      <div className={classnames('App', this.props.className)} style={this.props.style}>
        <Navbar>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">App</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/about">About</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
            </Nav>
        </Navbar>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>App</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/components/App/App.js</code> and save to reload.
        </p>

        <p><a href="/about">About</a></p>
      </div>
    );
  }
}

export default App;
