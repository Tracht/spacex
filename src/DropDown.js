import React from 'react';
import "./app.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 

class DropDown extends React.Component {

  render() {
    return(
      <div>

      <Navbar bg="light" variant="primary" expand="lg">
          <Nav className="mr-auto">
            <NavDropdown title="Inventory" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rockets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dragons</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar>

      </div>
    )
  };
}

export default DropDown;