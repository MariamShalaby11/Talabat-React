import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './Components/Homepage/Homepage';
import Homepage from './Components/Homepage/Homepage';
// import Header from './Components/Header';
// import Filters from './Components/Filters/Filter'
// import Faq from './Components/StaticPages/FAQ';
// import Privacy from './Components/StaticPages/Privacy';
// import Terms from './Components/StaticPages/Terms';

import Filter from '../src/Components/Filters/Filter'
import Privacy from '../src/Components/StaticPages/Privacy'
import Menu from '../src/Components/Menues/Menu'
import AppRouter from '../src/Components/Router/AppRouter'
import Partner from './Components/Become_a_Bartner/files/partner';



ReactDOM.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
