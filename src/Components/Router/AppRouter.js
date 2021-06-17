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
import Checkout from './../Checkout/Checkout';
import Offers from './../Offers/Offers';
import Register from './../Registerr/Register';
import Accountinfo from './../AccountInfo/Accountinfo';
import Login from './../Login/Login';
import Footer from './../Footer';
import contactus from './../StaticPages/Contactus';
import login from '../Login/Login'
export default class AppRouter extends React.Component{

    render(){
        const StaticRoute="/MariamShalaby11/Talabat-React/";
        return(
            
            <Router>
                
                <Header/>
                <switch>
                <Route component={Home}  path={StaticRoute} exact ></Route>
                <Route component={Home}  path={`${StaticRoute}Home`}exact ></Route>
                <Route component={Filters}   path={`${StaticRoute}filters`}></Route>
                <Route component={login}   path={`${StaticRoute}Login`}></Route>
                <Route component={Faq} path={`${StaticRoute}FAQ`} ></Route>
                <Route component={Privacy} path={`${StaticRoute}Privacy`} ></Route>
                <Route component={Terms} path={`${StaticRoute}Terms`}></Route>
                <Route component={AllRestaurants} path={`${StaticRoute}AllResturants`} ></Route>
                <Route component={partner} path={`${StaticRoute}BecomePartner`}></Route>
                <Route component={Menue} path={`${StaticRoute}Menu`} ></Route>
                <Route component={Restaurant} path={`${StaticRoute}Restaurant`} ></Route>
                <Route component={Checkout} path={`${StaticRoute}Checkout`} ></Route>
                <Route component={Offers} path={`${StaticRoute}Offers`} ></Route>
                <Route component={Register} path={`${StaticRoute}Register`} ></Route>
                <Route component={Accountinfo} path={`${StaticRoute}Accountinfo`} ></Route>
                <Route component={contactus}path={`${StaticRoute}contactus`}/>







               </switch>
               <Footer/>


           
            </Router>
            
        )
    }
}
