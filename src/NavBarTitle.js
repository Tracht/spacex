import React from 'react';
import "./app.css";
import Navbar from 'react-bootstrap/Navbar';

class NavBarTitle extends React.Component {

  render() {
    return(
      <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>SpaceX</Navbar.Brand>
      </Navbar>
      </div>
    )
  };
}

export default NavBarTitle;