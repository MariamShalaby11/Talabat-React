import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filters from './Components/Filters/Filter';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Filters />
  </React.StrictMode>,
  document.getElementById('root')
);
//atiah
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
