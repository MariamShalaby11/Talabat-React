import React from 'react';
import './HeaderStyle.css';
import FoodAway from '../images/FoodAway (4).png';
import {Link} from 'react-router-dom';
import {  FaShoppingCart, FaSignOutAlt, FaUser} from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import facebook from './../images/fb.jpeg';
import { FaEyeSlash } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock,faEnvelope,} from "@fortawesome/free-solid-svg-icons";


export default class Header extends React.Component{

    state={
        setShow:false
    }

    handleShow=()=>{
        this.setState({setShow:true});
      }
      handleClose=()=>{
        this.setState({setShow:false});
    }

    render(){
        return(
            <>
            <nav class="navbar navbar-expand-lg navbar-light fix"  id="Mynav">
			<div class="container">
				
                <Link class="navbar-brand" to="/MariamShalaby11/Talabat-React/" > <img src={FoodAway} style={{width:250, height:50,marginBottom:10}}/></Link>	
                   
				
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbars-rs-food" style={{textAlign:'center'}}>
					<ul class="navbar-nav ml-auto" id="items">

					   <li class="nav-item">
                            <Link class="nav-link" to="/MariamShalaby11/Talabat-React/Offers" id="Navlinks">Offers</Link>
                       </li>

                       <li class="nav-item">
                            <Link class="nav-link" to="/MariamShalaby11/Talabat-React/BecomePartner"id="Navlinks" >Become a partner</Link>
                       </li>

						<li class="nav-item">
                            <Link class="nav-link" to="/MariamShalaby11/Talabat-React/AllResturants"id="Navlinks" >All Resturants</Link>
                       </li>

                       <li>
                       <Dropdown>
                            <Dropdown.Toggle  style={{backgroundColor:"#810000",border:"none",marginTop:2}} variant="danger" id="dropdown-basic">
                                My Account
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item ><Link class="nav-link" to="/MariamShalaby11/Talabat-React/Accountinfo"id="Navlinks" style={{color:"black"}}><FaUser style={{color:"#810000"}}/> &nbsp; Account Info</Link></Dropdown.Item>
                                <Dropdown.Item ><Link class="nav-link" to="/MariamShalaby11/Talabat-React/Accountinfo"id="Navlinks" style={{color:"black"}}> <FaShoppingCart style={{color:"#810000"}}/> &nbsp; My Orders</Link> </Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><FaSignOutAlt style={{color:"#810000"}}/> &nbsp; Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                       </Dropdown>
                       </li>

                       <li class="nav-item">
                            <button class="btn btn-default" id="Navlinks" onClick={this.handleShow} id="LoginBtn">Login</button>
                       </li>

					</ul>
				</div>
			</div>
		</nav>

        {/* -------------------Login Modal----------------------------- */}
        <Modal show={this.state.setShow}
                      aria-labelledby="contained-modal-title-vcenter"
                      centered                     
                     >
                        <Modal.Header style={{border:'none'}} >                        
                        <button className="close" onClick={this.handleClose} aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                        </button>
                        </Modal.Header>

                        <Modal.Body>
                        <div class="card-header " id="card-header">
                        <h1 class="text-center font-weight-light my-4" id="card-header-text">Login</h1>
                        </div>
                        <div class="card-body bg-transparent">
                        <form action="" method="POST" role="form">
                             <button type="button" id="Google" class="mybtn btn btn-block form-control formcntrl">
                                <img src="https://img.icons8.com/fluent/50/000000/google-logo.png" id="googleImg"/> &#160;&#160; Continue with Google</button>
                            <button type="button" id="facebook" class="mybtn btn btn-primary btn-block form-control formcntrl">
                                <img src={facebook} id="googleImg" style={{borderRadius:10}}/> 

                                 &#160;&#160; Continue with Facebook</button>
                                <hr className="hhrr"/>
                            <div class="form-group formgrps mt-3 ">
                                <div class="input-group input-group">
                                     <div class="input-group-prepend">
                                         <span class="input-group-text inptxt" id="inputGroup-sizing-sm">
                                             <FontAwesomeIcon icon={faEnvelope} /></span>
                                     </div>
                                 <input type="email" class="form-control formcntrl" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="email" placeholder="Enter your E-mail" required />
                                </div>
                            </div>
                             <div class="form-group formgrps">
                                <div class="input-group input-group">
                                    <div class="input-group-prepend bg-transparent">
                                        <span class="input-group-text inptxt" id="inputGroup-sizing-sm">
                                             <FontAwesomeIcon icon={faLock} /></span>
                                    </div>
                                    <input type="password" class="form-control formcntrl" aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm" placeholder="Password" required
                                        id="pass"/>
                                        <div class="input-group-prepend">
                                            <span class="input-group-text inptxt" id="inputGroup-sizing-sm">  
                                                <FaEyeSlash style={{cursor: "pointer"}}/>
                                                </span>
                                        </div>
                                </div>
                            </div> 
                             <div class="form-check mt-4 ml-1">
                                <label class="form-check-label" />
                                    <input type="checkbox" class="form-check-input" name="" id="check" value="checkedValue" />
                                 Remember Me
                            </div>                           
                            <button type="button" id="login" class="mybtn btn btn-primary btn-block mt-3 form-control formcntrl">Login</button>
                        </form>
                    </div>
                     <div class="card-footer text-center"  id="gotoregister">
                        <div class="d-flex justify-content-center mt-3">
                            <h6>Need an account?</h6>
                            <a href="/MariamShalaby11/Talabat-React/Register" class="ml-2" id="signup">Sign Up Now!</a>  
                        </div>
                    </div>
                        </Modal.Body>         
        </Modal>
        </>
        )
    }
}