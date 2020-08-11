import React from 'react';
import "./app.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 

class NavBarTitle extends React.Component {

  render() {
    return(
      <div>
      <Navbar  bg="dark" variant="dark">
        <Navbar.Brand>SpaceX</Navbar.Brand>
        <NavDropdown title="Inventory" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rockets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dragons</NavDropdown.Item>
        </NavDropdown>
      </Navbar>

      </div>
    )
  };
}

export default NavBarTitle;