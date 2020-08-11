import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarTitle from './NavBarTitle'
import Title from './Title';
import CardSection from './CardSection'

ReactDOM.render(
  <React.StrictMode>
    <NavBarTitle />
    <Title />
    <CardSection />
  </React.StrictMode>,
  document.getElementById('root')
);

