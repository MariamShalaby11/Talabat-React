
import React from 'react';
import './FooterStyle.css';
import FoodAway from '../images/FoodAway (4).png';
import { Link } from 'react-router-dom';



export default class Footer extends React.Component{
    state={

    }
render(){
    return(
        <div class="mt mt-5 " id="footer">
        <div class="container d-flex justify-content-between pt-4">
            <div >
                    <div class=" "><img src={FoodAway} id="logos"/>
                    </div>
      
                    </div>
                <div class="d-flex flex-column ml-5">
                        <div class="mt-3 ">
                                <h1 class="mb-4">Know about us</h1>
                                <Link  to="/MariamShalaby11/Talabat-React/Terms">Term</Link>
                                <Link  to="/MariamShalaby11/Talabat-React/faq">FAQ</Link>
                                <Link  to="/MariamShalaby11/Talabat-React/Privacy">Privacy</Link>
                             
                                
      
                        </div> 
                </div>
                <div>
                    <div class="mt-3">
                        <h1 class="mb-4">contact with us</h1>
                        <a href="">Feedback</a>
                        <Link  to="/MariamShalaby11/Talabat-React/contactus">Contact us</Link>
                    
                    </div> 
                </div>
                <div id="download" class=" d-md-flex  justify-content-between mt-3 ">
                    <a class="btn  "><img src="images/google_play.svg"/></a>
                    <a class="btn"><img src="images/appstore.svg"/></a> 
                </div>
           </div>
           <hr style={{color:"rgb(0, 255, 8)"}}/>
           
           <div class="container  mt-4">
               <div class="d-flex justify-content-between mt-3">
                <span class="ml-5" style={{color: "rgba(255, 255, 255, .6)",fontsize: 14}}>@2020 FoodAway.com</span>
             
                <div class="col-3 d-flex justify-content-between mr-4 " style={{color:"white"}}>
                    {/* <FaFacebook/> */}
                    <faTwitter/>
                    <faInstagram/>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin"></i>
                </div>
               </div>  
           </div>
        </div>
    )
}

 
  }