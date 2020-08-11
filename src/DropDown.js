import React from 'react';
import "./app.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 

class DropDown extends React.Component {

  constructor() {
    super();
    this.state = {
        selection: "",
    }
  };

  onSelection = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.selection);
  }

  render() {
    return(
      <div>
      <Navbar bg="white" variant="primary" expand="lg">
          <Nav className="mr-auto">
            <NavDropdown title="Inventory" id="basic-nav-dropdown">
              <input ></input>
              <NavDropdown.Item onClick={this.onSelection} name="selection" value="rockets">
                Rockets
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.onSelection} name="selection" value="dragons">
                Dragons
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar>
      </div>
    )
  };
}

export default DropDown;