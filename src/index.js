import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Title from './Title';
import NavBar from './NavBar'
import CardSection from './CardSection'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    {/* <Title /> */}
    <CardSection />
  </React.StrictMode>,
  document.getElementById('root')
);

