import React from 'react';
import "./app.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 

class NavBar extends React.Component {

  render() {
    return(
      <div>
      <Navbar  bg="dark" variant="dark">
        <Navbar.Brand>SpaceX</Navbar.Brand>
      </Navbar>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Have a look around and see what we're making!</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Inventory" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rockets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dragons</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar bg="light">
        <Navbar.Brand></Navbar.Brand>
      </Navbar>
      </div>
    )
  };
}

export default NavBar;