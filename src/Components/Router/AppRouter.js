import React from 'react';
import{BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './../Homepage/Homepage';
import Filters from './../Filters/Filter';
import Header from './../Header';
import Faq from './../StaticPages/FAQ';
import Privacy from './../StaticPages/Privacy';
import Terms from './../StaticPages/Terms';
import AllRestaurants from './../All Restaurants/AllRestaurants';
import Menue from './../Menues/Menu';
import Restaurant from './../Restaurant/Restaurant';
export default class AppRouter extends React.Component{

    render(){
        return(
            
            <Router>
                
                <Header/>
                
                <Route component={Home}  path="/MariamShalaby11/Talabat-React" exact ></Route>
                <Route component={Home}  path="/MariamShalaby11/Talabat-React/Home" exact ></Route>
                <Route component={Filters}   path="/MariamShalaby11/Talabat-React/Filters" exact ></Route>
                <Route component={Faq} path="/MariamShalaby11/Talabat-React/Faq/" exact></Route>
                <Route component={Privacy} path="/MariamShalaby11/Talabat-React/Privacy/" exact></Route>
                <Route component={Terms} path="/MariamShalaby11/Talabat-React/Terms/" exact></Route>
                <Route component={AllRestaurants} path="/MariamShalaby11/Talabat-React/AllResturants" exact></Route>
                <Route component={Menue} path="/MariamShalaby11/Talabat-React/Menu" exact></Route>
                <Route component={Restaurant} path="/MariamShalaby11/Talabat-React/Restaurant" exact></Route>



           
            </Router>
            
        )
    }
}
