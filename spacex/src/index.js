import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cards from './Cards.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Cards />
  </React.StrictMode>,
  document.getElementById('root')
);

