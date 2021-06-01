import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Filters from './Components/Filters/Filter';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './Components/Homepage/Homepage';
import AppRouter from './Components/Router/AppRouter';
// import MapContainer from './Components/Homepage/map';
// import Header from './Components/Header';
// import Filters from './Components/Filters/Filter'
// import Faq from './Components/StaticPages/FAQ';
// import Privacy from './Components/StaticPages/Privacy';
// import Terms from './Components/StaticPages/Terms';
ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
