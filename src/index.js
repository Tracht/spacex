import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardSection from './CardSection'
// import Cards from './Cards.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardSection />
  </React.StrictMode>,
  document.getElementById('root')
);

