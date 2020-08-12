import React from 'react';
import "./app.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 

class DropDown extends React.Component {

  // constructor(props) {
  //   super();
  //   this.state = {
  //     selection: "dragons",
  //   }
  // };

  render() {
    return(
      <div>
      <Navbar bg="white" variant="primary" expand="lg">
          <Nav className="mr-auto">
            <NavDropdown title="Inventory" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={this.props.setRocket} name="selection" value="rockets">
                Rockets
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.props.setDragon} name="selection" value="dragons">
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