import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Title from './Title';
import CardSection from './CardSection'

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <CardSection />
  </React.StrictMode>,
  document.getElementById('root')
);

