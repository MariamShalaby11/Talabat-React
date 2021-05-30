import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filters from './Components/Filters/Filter';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Partner from '../src/Components/Become_a_Bartner/files/partner'

ReactDOM.render(
  <React.StrictMode>
    <Partner />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
