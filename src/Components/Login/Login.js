import React, { Component } from 'react';
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import facebook from '../../images/fb.jpeg';
import axios from 'axios';
import { FaEyeSlash } from 'react-icons/fa';


class Login extends Component {
    state = {  
        Email:""
        ,Password:""
        ,classMail:"invisible"
    }
        handleEmailChange = (email)=>{
            this.setState({Email:email.target.value});
        }
        handlePasswordChange = (pass)=>{
            this.setState({Password:pass.target.value});
        }
        Login = (props) => {
            const data = {
                email:this.email,
                password:this.password
            }

            axios.post(`https://localhost:44379/api/Login/${this.state.Email}/${this.state.Password}`).then(res=>{
                console.log(res);
               // this.setState({AllRestaurants:res.data})
                this.setState({classMail:"invisible"});
                //this.history.pushState(null, 'Restaurant');
                this.props.history.push('Restaurant')
                console.log(this.props.history);
  
                console.log(res.data)  
            }).catch(err=>{
               // console.log(err); 
               this.setState({classMail:"visible"});
               // this.state.classMail="visible"
            }) ;
        }
       

        
    render() { 
        return ( 
            
    <div class="container">
        <div>
            <br />
            <br />
            <br />
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5" id="cardd">
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
                                 <input type="email" class="form-control formcntrl" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="email" placeholder="Enter your E-mail"
                                  pattern="^[a-z A-Z 0-9 ._-]+@[a-z A-Z 0-9 .-]+\.[a-z A-Z]{2,6}$" required 
                                //    onchange={(Email)=>this.setState({Email})}
                                    onChange={this.handleEmailChange}/>
                                    <span style={{color: "red"}} class={this.state.classMail} >invalid Email</span>
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
                                        id="pass"
                                        //  onchange={(Password)=>this.setState({Password})}
                                          onChange={this.handlePasswordChange}/>
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
                                {/* </label>                               */}
                            </div>                           
                            <button type="button" id="login" class="mybtn btn btn-primary btn-block mt-3 form-control formcntrl"
                            onClick={()=>this.Login()}>Login</button>
                        </form>
                    </div>
                     <div class="card-footer text-center"  id="gotoregister">
                        <div class="d-flex justify-content-center mt-3">
                            <h6>Need an account?</h6>
                            <a href="/MariamShalaby11/Talabat-React/Register" class="ml-2" id="signup">Sign Up Now!</a>  
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
         );
    }
}
 
export default Login;