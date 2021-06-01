import React from 'react';
import Home from './../Homepage/Homepage';
import Filters from './../Filters/Filter';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//import { HashLink } from 'react-router-hash-link';
import Header from './../Header';
import Faq from './../StaticPages/FAQ';
import Privacy from './../StaticPages/Privacy';
import Terms from './../StaticPages/Terms';


export default class AppRouter extends React.Component{

    render(){
        return(
            
            <Router>
                
                <Header/>
                {/* <Switch> */}
                
                <Route   component={Home}  path="/" ></Route>
                <Route  component={Home} exact path="/Home/" ></Route>
                <Route  component={Filters} exact  path="/Filters/" ></Route>
                <Route component={Faq} path="/Faq/" exact></Route>
                <Route component={Privacy} path="/Privacy/" exact></Route>
                <Route component={Terms} path="/Terms/" ></Route>
                {/* </Switch> */}
            </Router>
            
        )
    }
}
