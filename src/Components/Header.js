import React from 'react';
import './HeaderStyle.css';
import FoodAway from '../images/FoodAway (4).png';
import {Link} from 'react-router-dom';
export default class Header extends React.Component{
    render(){
        return(
            <>
            <nav class="navbar navbar-expand-lg navbar-light fix"  id="Mynav">
			<div class="container">
				
                <Link class="navbar-brand" to="/MariamShalaby11/Talabat-React/" > <img src={FoodAway} alt="nh" style={{width:250, height:50}}/></Link>	
                   
				
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbars-rs-food">
					<ul class="navbar-nav ml-auto" id="items">

                       <li class="nav-item">
                            <Link class="nav-link" to="/MariamShalaby11/Talabat-React/BecomePartner"id="Navlinks" >Become a partner</Link>
                       </li>
						<li class="nav-item">
                            <Link class="nav-link" to="/MariamShalaby11/Talabat-React/AllResturants"id="Navlinks" >All Resturants</Link>
                       </li>
                       <li class="nav-item">
                            <Link class="nav-link" to="/MariamShalaby11/Talabat-React/Register" id="Navlinks">Register</Link>
                       </li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">My Account</a>
							<div class="dropdown-menu" aria-labelledby="dropdown-a">
                                <a class="dropdown-item" href="All Restaraunts.html">
                                    <i class="fal fa-credit-card-blank" id="icon"></i> Pay: EGP 0.00</a>

								<a class="dropdown-item" href="All Restaraunts.html">
                                   <i class="fal fa-shopping-cart" id="icon"></i> My Orders</a>

								<a class="dropdown-item" href="All Restaraunts.html">
                                   <i class="fal fa-user" id="icon"></i> Account Info</a>

                                <a class="dropdown-item" href="All Restaraunts.html">
                                    <i class="far fa-map-marked-alt" id="icon"></i> Saved Address</a>

								<a class="dropdown-item" href="All Restaraunts.html">
                                    <i class="fal fa-sign-out" id="icon"></i> Log Out</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
        </>
        )
    }
}