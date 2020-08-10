import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Title extends React.Component {

  render() {
    return (
      <div>
        <header className="App-header">
          
        <Jumbotron fluid>
          <Container>
            <h1>SpaceX</h1>
            <p>
              Welcome! Have a look around. 
            </p>
          </Container>
        </Jumbotron>
        
        </header>
      </div>
    );
  }
  
}

export default Title;