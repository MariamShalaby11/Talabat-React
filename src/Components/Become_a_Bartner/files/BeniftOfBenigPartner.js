import React, { Component } from 'react'; 
import Success from '../files/Success.js'
import axios from "axios";
import partner from'../../Become_a_Bartner/style/partner.css'
import Map from '../files/map.js'
import banner2 from '../img/banner2.jpg'
import delivered from '../img/delivered.svg'
import fleet_new from '../img/fleet_new.png'
import google_play from '../img/google_play.svg'
import ic_delivered from '../img/ic_delivered.png'
import ic_customers from '../img/ic_customers.png'
import ic_revenue from '../img/ic_revenue.png'
import logo from '../img/logo.svg'
import prep from '../img/prep.svg'
import img_delivery from '../img/img2.jpg'
import img_hiring from '../img/img1.jpg'
import img_live from '../img/img3.jpg'
import order_placed from '../img/order_placed.svg'
import { HashLink } from 'react-router-hash-link';
import{BrowserRouter as Router} from 'react-router-dom';

export default class BeniftOfBenigPartner extends React.Component{
    constructor(props) {
        super(props);
        
      }
  render(){
      return(
        <div class="container" id="container2" >
      
            <div class="d-flex flex-column  mt-2 ">
                <h1 class="mx-auto mt-5  pt-4 ">Benefits of being a FoodAway partner </h1>
                <div class="d-md-flex justify-content-between mt-5 pt-5">
                    <div class=" d-flex flex-column justify-content-center ">
                    
                        <img class="mx-auto"  src={ic_revenue} />
                        <h1 class="mx-auto">Additional revenue stream</h1>
                        <p class="mx-auto">Get more order</p>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                    <img class="mx-auto"  src={ic_customers} />

                        <h1 class="mx-auto">New Customers</h1>
                        <p class="mx-auto">More visibility through the Talabat platform</p>
                    </div>
                    <div class=" d-flex flex-column justify-content-center">
                        <img class="mx-auto " src={ic_delivered} />
                    
                        <h1 class="mx-auto">Delivery,done</h1>
                        <p class="mx-auto">Get more order</p>
                    </div>
                </div>  
            </div>
            
            
            <div class="d-flex flex-column mr-5">
                <h1 class="mx-auto mt-5  pt-4 mb-5">Benefits of our own delivery</h1>
                <div class="d-md-flex col-12  justify-content-between mt-5" >
                    <div class=" d-flex flex-column  col-md-4 ">

                        <img class="mx-auto w-100 mt-4" src={img_hiring}/>

                        <h1 class="mx-auto mt-4 mb-4">No hiring headaches</h1>
                        <p class=" mx-auto  text-md-center">Dont worry about sourcing drivers to deliver your orders. Leave the logistics to us, so you can focus on making great food!</p>
                    </div>
                    <div class=" d-flex flex-column  col-md-4 ml-md-5 mr-md-5 ">
                        <img class="mx-auto w-100 mt-4" src={img_delivery} />

                        <h1 class="mx-auto mt-4 mb-4">Great delivery prices</h1>
                        <p class="mx-auto text-md-center">Customers pay a low delivery fee for orders delivered with FoodAway.</p>
                    </div>
                    <div class="d-flex flex-column col-md-4 justify-content-center">
                        <img class="mx-auto w-100" src={img_live} />

                        <h1 class="mx-auto mt-4 mb-4 ">Live tracking</h1>
                        <p class="mx-auto text-md-center">Customers can enjoy live tracking of their orders to their doorsteps, giving them an even better experience.</p>
                    </div>
                </div>  
            
            </div>
      

       {/* <figure class="d-flex justify-content-center mt-5 pt-3">
        
         <img  src={fleet_new} />

         <figcaption class="text-primary col-5"> Fleet of over 16000 riders and growing</figcaption>
       </figure> */}
       
        <div class="d-flex flex-column mt-5">
            <h1 class="mx-auto mt-5 mb-5">How it works?</h1>
            <div  class="d-flex justify-content-between ml-5 mt-5">
                <div class="ml-5 d-flex justify-content-between flex-column">
                    <img src={order_placed} class=" w-50 mx-auto"/>
                    <h4 class="mx-auto ">Order placed</h4>
                </div>
                <div class="ml-5 d-flex justify-content-between flex-column">
                <img class="mx-auto " src={prep}   class=" w-75 mx-auto"/>

                <h4 class="mx-auto ">Prep</h4>
                </div>
                <div class="ml-5 d-flex justify-content-between flex-column">
                <img  src={delivered}  class=" w-75 mx-auto mb-3"/>

                <h4 class="mx-auto ">Delivered</h4>
                </div>
            </div>
         </div>
    
        <div class="d-flex flex-column justify-content-between mt-5 pt-5">
            <h1 class="mx-auto">Ready to join us?</h1>
            <button class="mx-auto btn col-4 mt-5 mb-5">Join Now</button>

            <Router>
                <HashLink class="btn mx-auto btn col-4 mt-5 mb-5"  smooth to='/MariamShalaby11/Talabat-React/BecomePartner/#BecomePartner' > Join Now </HashLink>
            </Router>
        </div>
    
   </div>
 
      )
  } 
  }
  

