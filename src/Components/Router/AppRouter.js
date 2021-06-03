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
import partner from './../Become_a_Bartner/files/partner';


export default class AppRouter extends React.Component{

    render(){
        const StaticRoute="/MariamShalaby11/Talabat-React/";
        return(
            
            <Router>
                
                <Header/>
                <switch>
                <Route component={Home}  path={StaticRoute} exact ></Route>
                <Route component={Filters}   path={`${StaticRoute}filters`}></Route>
                <Route component={Faq} path={`${StaticRoute}FAQ`} ></Route>
                <Route component={Privacy} path={`${StaticRoute}Privacy`} ></Route>
                <Route component={Terms} path={`${StaticRoute}Terms`}></Route>
                <Route component={AllRestaurants} path={`${StaticRoute}AllResturants`} ></Route>
                <Route component={partner} path={`${StaticRoute}BecomePartner`}></Route>

                <Route component={Menue} path={`${StaticRoute}Menu`} ></Route>
                <Route component={Restaurant} path={`${StaticRoute}Restaurant`} ></Route>
               </switch>


           
            </Router>
            
        )
    }
}
