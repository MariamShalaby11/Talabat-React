import React from 'react';
import { FaEnvelope, FaEyeSlash, FaLockOpen, FaUser } from 'react-icons/fa';
import './Register.css';
import facebook from '../../images/fb.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

export default class Home extends React.Component{

    state={

    }

    render(){
        return(
            <div class="container">
            <div class="card text-left show" id="Mycard">
                <div class="row" id="MyRow">
                    <div id="divLeft" class="d-none d-lg-block col-lg-7">
    
                    </div>
    
                    <div class="col-12 col-lg-4">
                        <h2 class="text-center" id="MyHeaderTxt">Create Account</h2>
                        <form action="" method="POST" role="form">   
                                
                            <button type="button" id="Google" class="Mybutton btn btn-block form-control">
                                <img src="https://img.icons8.com/fluent/50/000000/google-logo.png" id="googleImg"/> &#160;&#160; Continue with Google</button>
                            <button type="button" id="facebook" class="Mybutton btn btn-primary btn-block form-control">
                            <img src={facebook} id="googleImg" style={{borderRadius:10}}/>  &#160;&#160; Continue with Facebook</button>
                                <hr className="hhrr"/>
    
                                <div class="row" id="row1">
                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                        <div class="MyFormGroup form-group" >                             
                                            <div class="input-group input-group">
                                                <div class="input-group-prepend">
                                                    <span class="MyTxt input-group-text" >
                                                        <FaUser/></span>
                                                </div>
                                                <input type="text" class="MyFormControl form-control" aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm" placeholder="First Name"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                        <div class="MyFormGroup form-group" >                             
                                            <div class="input-group input-group">
                                                <div class="input-group-prepend">
                                                    <span class="MyTxt input-group-text" >
                                                        <FaUser/></span>
                                                </div>
                                                <input type="text" class="MyFormControl form-control" aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
    
                            <div class="MyFormGroup form-group">
                                <div class="input-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="MyTxt input-group-text" >
                                            <FaUser/></span>
                                    </div>
                                    <input type="text" class="MyFormControl form-control" aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm" placeholder="Username"/>
                                </div>
                            </div> 
                                
                            <div class="MyFormGroup form-group">
                                <div class="input-group input-group">                              
                                    <div class="input-group-prepend">
                                        <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                           <FaEnvelope/></span>
                                    </div>
                                        <input type="email" class="MyFormControl form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="email" placeholder="Enter your E-mail"/>
                                </div>
                            </div>    
    
                            <div class="MyFormGroup form-group">
                                <div class="input-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                        <FontAwesomeIcon icon={faLock} /></span>
                                    </div>
                                    <input type="password" class="MyFormControl form-control" aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm" placeholder="Password"/>
                                        <div class="input-group-prepend">
                                            <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                            <FaEyeSlash style={{cursor: "pointer"}}/></span>
                                        </div>
                                </div>
                            </div> 
                            <div class="MyFormGroup form-group">
                                <div class="input-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                        <FontAwesomeIcon icon={faLock} /></span>
                                    </div>
                                    <input type="password" class="MyFormControl form-control" aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm" placeholder="Confirm Password"/>
                                        <div class="input-group-prepend">
                                            <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                            <FaEyeSlash style={{cursor: "pointer"}}/></span>
                                        </div>
                                </div>
                            </div> 
    
                             
                            <button type="button" id="login" class="Mybutton btn btn-primary btn-block mt-3 form-control">Create your account</button>                       
                        </form>
                        <div class="card-footer text-center" style={{background: "transparent", borderTop: "none"}}>
                            <div class="d-flex justify-content-center mt-3">
                                <h6>Aready have an account?</h6>
                                <a href="/MariamShalaby11/Talabat-React/Login" class="ml-2" id="signup">Login</a>  
                            </div>
                        </div>
                    </div>
    
    
                </div>
            </div>     
        </div>
        )
    }
}
