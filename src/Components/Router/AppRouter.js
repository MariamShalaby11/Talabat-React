import React from 'react';
import Home from './../Homepage/Homepage';
import Filters from './../Filters/Filter';
import{BrowserRouter as Router,Route} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export default class AppRouter extends React.Component{

    render(){
        return(
            <>
            <Router>
                <Route  component={Home} path="/" exact></Route>
                <Route  component={Home} path="/Homepage/" exact></Route>
                <Route  component={Filters} path="/Filters/" exact></Route>
            </Router>
            </>
        )
    }
}
