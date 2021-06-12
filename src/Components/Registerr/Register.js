import React from 'react';
import axios from 'axios';
import Loading from '../Registerr/loading'

import { FaEnvelope, FaEyeSlash, FaLockOpen, FaUser } from 'react-icons/fa';
import './Register.css';
import facebook from '../../images/fb.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

export default class Home extends React.Component{

  constructor(props){
      super(props);
      this.state={
          IsLoading:false,
        FirstNameError:false, LastNameError:false ,EmailError:false,MobileError:false,
        PasswordError:false,CPasswordError:false,UserNameError:false,
        FirstNamePassed:false,LastNamePassed:false,Emailpassed:false,MobilePassed:false,
        PasswordPassed:false,CPasswordPassed:false,UserNamePassed:false,
        FirstName:"",LastName:"",Email:"",Password:"",CPassword:"",UserName:""
    }
  }


  FirstNameError=(e)=>{
    if(!e){
         
         this.setState({FirstNameError:true})
     }else{
        this.setState({FirstNameError:false})
     }
  }
  FirstNamePassed=(e)=>{
    const validName = new RegExp(
        '^[a-zA-Z]{3,9}$'
     );
     if(!validName.test(e)){
         this.setState({FirstNamePassed:false,FirstNameError:true,FirstName:e})
     }else{
        this.setState({FirstNamePassed:true,FirstNameError:false,FirstName:e})
     }
  }

  LastNameError=(e)=>{
   if(!e){
         this.setState({LastNameError:true})
     }else{
        this.setState({LastNameError:false})
     }
  }
  LastNamePassed=(e)=>{
    const validName = new RegExp('^[a-zA-Z]{3,9}$');
     if(!validName.test(e)){
         this.setState({LastNamePassed:false,LastNameError:true,LastName:e})
     }else{
        this.setState({LastNamePassed:true,LastNameError:false,LastName:e})
     }
  }

  EmailError=(e)=>{
   
     if(!e){
       this.setState({EmailError:true})
     }else{
        this.setState({EmailError:false})
     }
  }
  EmailPassed=(e)=>{
    const validEmail = new RegExp(
        '[a-zA-Z0-9_]*@[A-Za-z]+.[a-zA-Z]{2,4}'
     );
     if(!validEmail.test(e)){
         this.setState({Emailpassed:false,EmailError:true,Email:e})
     }else{
        this.setState({Emailpassed:true,EmailError:false,Email:e})
     }
  }
  PasswordError=(e)=>{
   if(!e){
        this.setState({PasswordError:true})
    }else{
       this.setState({PasswordError:false})
    }
  }
  PasswordPassed=(e)=>{
    const validPassword = new RegExp('^(?=.*[0-9])(?=.*[a-z])([a-zA-Z0-9]{6,12})$');
    if(!validPassword.test(e)){
        this.setState({PasswordPassed:false,PasswordError:true,Password:e})
    }else{
      this.setState({PasswordPassed:true,PasswordError:false,Password:e})
    }
  }
  CPasswordError=(e)=>{
   if(!e){
        this.setState({CPasswordError:true})
    }else{
       this.setState({CPasswordError:false})
    }
  }
  CPasswordPassed=(e)=>{
    
    if(this.state.Password==e){
        
        this.setState({CPasswordPassed:true,CPasswordError:false,CPassword:e})
    }else{
       this.setState({CPasswordPassed:false,CPasswordError:true,CPassword:e})
    }
  }
  UserNameError=(e)=>{
   
    if(!e){
        this.setState({UserNameError:true})
    }else{
      this.setState({UserNameError:false})
    }
  }
  UserNamePassed=(e)=>{
    const validUserName = new RegExp('^[a-zA-Z]{3,9}$');
    if(!validUserName.test(e)){
        this.setState({UserNamePassed:false,UserNameError:true,UserName:e})
    }else{
       this.setState({UserNamePassed:true,UserNameError:false,UserName:e})
    }
  }

  
  Register=()=>{
      this.setState({IsLoading:true})
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          
        }
      }
      const configs = {
        headers: {
          'Content-Type': 'application/json',
          'Accept':'*/*'
          
        }
      }
      
 

      let URL='https://localhost:44365/api/Account/Register'
      const{Email,UserName,Password,CPassword,FirstName,LastName}=this.state;
      console.log(this.state)
      const params = new URLSearchParams()
      params.append('UserName',UserName)
      params.append('password', Password)
      params.append('Email', Email)

      params.append('ConfirmPassword', CPassword)
      params.append('FirstName', FirstName)
      params.append('LastName', LastName)
   const param={'UserName':UserName,'password': Password,'Email': Email,'ConfirmPassword':CPassword,'FirstName':FirstName,'LastName':LastName}
    axios.post(URL, params,config).then(res=>{
        console.log(res);
        this.setState({IsLoading:false})
      
    }).catch(err=>{
        if(err.message=='Network Error'){
            alert("something went wrong ,please try again")
        }
        this.setState({IsLoading:false})
         
       console.log(err);
       console.log(err.message); 
       console.log(err.statusCode); 

      
    }) ;
  }

    render(){
        if(this.state.IsLoading){
            return <Loading/>
        }else
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
                                                    aria-describedby="inputGroup-sizing-sm" placeholder="First Name"
                                                    onChange={(e)=>{this.FirstNameError(this.state.FirstNamePassed);this.FirstNamePassed(e.target.value);}} />
                                                    {this.state.FirstNameError&&<span class="error">First Name sould be character only with Length between(3-9)</span>}

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
                                                    aria-describedby="inputGroup-sizing-sm" placeholder="Last Name"
                                                    onChange={(e)=>{this.LastNameError(this.state.LastNamePassed);this.LastNamePassed(e.target.value);}} value={this.state.LastName}/>
                                                   {this.state.LastNameError&&<span class="error">Last Name sould be character only with Length between(3-9)</span>}

                                                    
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
                                        aria-describedby="inputGroup-sizing-sm" placeholder="Username"
                                        onChange={(e)=>{this.UserNameError(this.state.UserNamePassed);this.UserNamePassed(e.target.value);}} value={this.state.UserName}/>
                                      {this.state.UserNameError&&<span class="error">UserName Required,with charcter only </span>}
                                        
                                </div>
                            </div> 
                                
                            <div class="MyFormGroup form-group">
                                <div class="input-group input-group">                              
                                    <div class="input-group-prepend">
                                        <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                           <FaEnvelope/></span>
                                    </div>
                                        <input type="email" class="MyFormControl form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="email" placeholder="Enter your E-mail"
                                        onChange={(e)=>{this.EmailError(this.state.Emailpassed);this.EmailPassed(e.target.value);}} value={this.state.Email}/>
                                        {this.state.EmailError&&<span class="error">please enter email as ****@****.***</span>}
                     
                                </div>
                            </div>    
    
                            <div class="MyFormGroup form-group">
                                <div class="input-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                        <FontAwesomeIcon icon={faLock} /></span>
                                    </div>
                                    <input type="password" class="MyFormControl form-control" aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm" placeholder="Password"
                                        onChange={(e)=>{this.PasswordError(this.state.PasswordPassed);this.PasswordPassed(e.target.value);}} value={this.state.Password}/>
                                        <i class="fa fa-user icon bg-danger"></i>
                                         {this.state.PasswordError&&<span class="error">Password should be character with at least one number </span>}
                                      
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
                                        aria-describedby="inputGroup-sizing-sm" placeholder="Confirm Password"
                                        onChange={(e)=>{this.CPasswordError(this.state.CPasswordPassed);this.CPasswordPassed(e.target.value);}} value={this.state.CPassword}/>
                                        {this.state.CPasswordError&&<span class="error">Password doesn't match</span>}
                                        
                                        <div class="input-group-prepend">
                                            <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                            <FaEyeSlash style={{cursor: "pointer"}}/></span>
                                        </div>
                                </div>
                            </div> 
    
                             
                            <button type="button" id="login" class="Mybutton btn btn-primary btn-block mt-3 form-control" onClick={this.Register}>Create your account</button>                       
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
