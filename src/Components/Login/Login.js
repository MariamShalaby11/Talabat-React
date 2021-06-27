
import React, { Component } from 'react';
import Loading from '../Registerr/loading'
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock
} from "@fortawesome/free-solid-svg-icons";
import facebook from '../../images/fb.jpeg';
import axios from 'axios';
import { FaEyeSlash,FaUser,FaEye } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';
import {Link} from 'react-router-dom';



class Login extends Component {
    state = {  
         Email:""
        ,Password:""
        ,classMail:"invisible"
        ,classPass:"invisible",
        IsLoaded:false,
        Customer:"",
        disabled:true,
        passwordtype:"password",
        ShowEye:"none",
        ShowEyeSlash:"block"
      
    }



        handleEmailChange = (e)=>{
           // this.setState({Email:e.target.value});
            const validUserName = new RegExp('^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$');

            if(!validUserName.test(e)){
            this.setState({classMail:"visible",Email:e,disabled:true})
            }else{
            this.state.disabled=false

            this.setState({classMail:"invisible",Email:e,disabled:false})
            
            }
        }
        handlePasswordChange = (e)=>{
           // this.setState({Password:pass.target.value});
             const validPassword =  new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");

            if(!validPassword.test(e)){
            this.setState({classPass:"visible",Password:e,disabled:true})
            }else{
                this.state.disabled=false
            this.setState({classPass:"invisible",Password:e,disabled:false})
            }
        }
        handleDisableBtn(){

        }
        HandleExactData = () =>{
             const config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Accept':'*/*'
                }
              }
              const params1 = new URLSearchParams()
                params1.append('UserName',this.state.Email)
                params1.append('Password',this.state.Password)

             let URL1='https://localhost:44327/api/Login'   
                axios.post(URL1, params1).then(res=>{
                    console.log(res);
                    this.Login();

                }).catch(err=>{
                    alert("Please Enter correct Data");
                    console.log("invalid Data");                 
                    console.log(err);
                })
        }
        Login = (props) => {
            this.setState({IsLoaded:true})
            const data = {
                email:this.email,
                password:this.password
              
            }
            const config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Accept':'*/*'
                }
              }
              const configs = {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept':'*/*'
                }
              }
              const params = new URLSearchParams()
                params.append('username',this.state.Email)
                params.append('password',this.state.Password)
                params.append('grant_type', 'password')
             
               
              

       

         


        let URL='https://localhost:44327/Token'
            axios.post(URL, params, config).then(res=>{
                console.log(res);
                localStorage.setItem('access_token',res.data.access_token);
               // this.setState({AllRestaurants:res.data})
                this.setState({classMail:"invisible"});
                //this.history.pushState(null, 'Restaurant');
               
                this.props.history.push('Home')
                window.location.reload(false);
                console.log(this.props.history);
               
                console.log(res.data)  

            }).catch(err=>{
               console.log(err); 
               this.setState({classMail:"visible"});
               // this.state.classMail="visible"
            }) ;
            this.GetCutomerID();
        }
       GetCutomerID=()=>{
           axios.get(`https://localhost:44327/api/customer/${this.state.Email}`).then(res=>{
               console.log(res.data)
               this.setState({
                   Customer:res.data.CustomerId
               })
               localStorage.setItem('Customer',JSON.stringify(res.data));
               

           })
       }
       showPasswordHandler=()=>{
           if( this.state.passwordtype="password"){
                this.state.passwordtype="text"
                this.setState({passwordtype:"text",  ShowEye:"block",
            ShowEyeSlash:"none"})
           }
       }
       HidePasswordHandler=()=>{
            if( this.state.passwordtype="text"){
                this.state.passwordtype="password"
                this.setState({passwordtype:"password",  ShowEye:"none",
            ShowEyeSlash:"block"})
           }
       }
       

        
    render() {
        if(this.state.IsLoaded){
            return <Loading/>
           
        } else{
        return ( 
           
         
    <div class="container">
        <div class="classRow row justify-content-center ">
            <div>
                <div class="card shadow-lg border-0 rounded-lg mt-5" id="cardd">
                    <div class="card-body bg-transparent">
                    <div class="card-header " id="card-header">
                    <h1 class="text-center font-weight-light" id="card-header-text">Login</h1>
                    </div>
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
                                            <FaUser/></span>
                                     </div>
                                 <input type="text" class="form-control formcntrl" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="email" placeholder="Enter your Username"
                                   required 
                                //    onchange={(Email)=>this.setState({Email})}
                                    onChange={(e)=>this.handleEmailChange(e.target.value)}/>
                                    <span style={{color: "red"}} class={this.state.classMail} >invalid Username</span>
                                </div>
                            </div>
                             <div class="form-group formgrps">
                                <div class="input-group input-group">
                                    <div class="input-group-prepend bg-transparent">
                                        <span class="input-group-text inptxt" id="inputGroup-sizing-sm">
                                             <FontAwesomeIcon icon={faLock} /></span>
                                    </div>
                                    <input type={this.state.passwordtype} class="form-control formcntrl" aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm" placeholder="Password" required
                                        id="pass"
                                        //  onchange={(Password)=>this.setState({Password})}
                                        onChange={(e)=>this.handlePasswordChange(e.target.value)}/>
                                        <span style={{color: "red"}} class={this.state.classPass} >invalid Password</span>

                                        <div class="input-group-prepend">
                                            <span class="input-group-text inptxt" id="inputGroup-sizing-sm">  
                                                <FaEyeSlash onClick={this.showPasswordHandler} style={{display:this.state.ShowEyeSlash,cursor: "pointer"}}/>
                                                <FaEye onClick={this.HidePasswordHandler} style={{display:this.state.ShowEye,cursor: "pointer"}}/>

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
                            <button  type="button" id="login" class='mybtn btn btn-primary btn-block mt-3 form-control formcntrl'  
                            onClick={()=>this.HandleExactData()} disabled={this.state.disabled} >Login</button>
                        </form>
                    </div>
                     <div class="card-footer text-center"  id="gotoregister">
                        <div class="d-flex justify-content-center mt-3">
                            <h6>Need an account?</h6>
                            <Link to="/MariamShalaby11/Talabat-React/Register" class="ml-2" id="signup">Sign Up Now!</Link>  
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
         );
    }
}
}
 
export default Login;