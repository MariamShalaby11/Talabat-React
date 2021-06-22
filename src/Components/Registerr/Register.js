import React from 'react';
import axios from 'axios';
import Loading from '../Registerr/loading'

import { FaEnvelope, FaEyeSlash, FaLockOpen, FaUser ,FaEye} from 'react-icons/fa';
import './Register.css';
import facebook from '../../images/fb.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

export default class Home extends React.Component{

  constructor(props){
      super(props);
      this.state={
          IsLoading:false,
        FirstNameError:false, LastNameError:false ,EmailError:false,MobileError:false,
        PasswordError:false,CPasswordError:false,UserNameError:false,
        FirstNamePassed:false,LastNamePassed:false,Emailpassed:false,MobilePassed:false,
        PasswordPassed:false,CPasswordPassed:false,UserNamePassed:false,
        FirstName:"",LastName:"",Email:"",Password:"",CPassword:"",UserName:"",
        passwordtype:"password",
        cpasswordtype:"password",
        ShowEye:"none",
        ShowEyeSlash:"block", 
        cShowEye:"none",
        cShowEyeSlash:"block"
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
    const validPassword = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
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
    const validUserName = new RegExp('^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$');
    if(!validUserName.test(e)){
        this.setState({UserNamePassed:false,UserNameError:true,UserName:e})
    }else{
       this.setState({UserNamePassed:true,UserNameError:false,UserName:e})
    }
  }

    handleData =()=>{
        if(this.state.FirstNamePassed && this.state.LastNamePassed && this.state.Emailpassed
        && this.state.PasswordPassed && this.state.CPasswordPassed && this.state.UserNamePassed){
            this.Register();
        }else{
            alert("Please Enter Correct Data");
            if(this.state.FirstNameError || this.state.FirstName == "" ){
                this.FirstNameError();
            } else if(this.state.LastNameError || this.state.LastName =="" ){
                this.LastNameError();
            }else if(this.state.UserNameError || this.state.UserName == ""){
                 this.UserNameError();
            } else if(this.state.EmailError || this.state.Email == ""){
                this.EmailError();
            }else if(this.state.PasswordError || this.state.Password == ""){
                this.PasswordError();
            }    else if(this.state.CPasswordError || this.state.CPassword == ""){
                 this.CPasswordError();
            }      
           
           
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
      
 

      let URL='https://localhost:44327/api/Account/Register'
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
        this.props.history.replace("Login")
      
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

     showcPasswordHandler=()=>{
           if( this.state.cpasswordtype="password"){
                this.state.cpasswordtype="text"
                this.setState({cpasswordtype:"text",  cShowEye:"block",
            cShowEyeSlash:"none"})
           }
       }
    HidecPasswordHandler=()=>{
        if( this.state.cpasswordtype="text"){
            this.state.cpasswordtype="password"
            this.setState({cpasswordtype:"password",  cShowEye:"none",
        cShowEyeSlash:"block"})
        }
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
    
                    <div class="col-12 col-lg-5">
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
                                                    onChange={(e)=>{this.FirstNameError(this.state.FirstNamePassed);this.FirstNamePassed(e.target.value);}} required />
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
                                                    onChange={(e)=>{this.LastNameError(this.state.LastNamePassed);this.LastNamePassed(e.target.value);}} value={this.state.LastName} required/>
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
                                        onChange={(e)=>{this.UserNameError(this.state.UserNamePassed);this.UserNamePassed(e.target.value);}} value={this.state.UserName} required/>
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
                                        onChange={(e)=>{this.EmailError(this.state.Emailpassed);this.EmailPassed(e.target.value);}} value={this.state.Email} required/>
                                        {this.state.EmailError&&<span class="error">please enter email as ****@****.***</span>}
                     
                                </div>
                            </div>    
    
                            <div class="MyFormGroup form-group">
                                <div class="input-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                        <FontAwesomeIcon icon={faLock} /></span>
                                    </div>
                                    <input type={this.state.passwordtype} class="MyFormControl form-control" aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm" placeholder="Password"
                                        onChange={(e)=>{this.PasswordError(this.state.PasswordPassed);this.PasswordPassed(e.target.value);}} value={this.state.Password} required/>
                                        <i class="fa fa-user icon bg-danger"></i>
                                         {this.state.PasswordError&&<span class="error">Password must have at least one capital letter & one small letter & one special letter  </span>}
                                      
                                        <div class="input-group-prepend">
                                            <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                            <FaEyeSlash onClick={this.showPasswordHandler} style={{display:this.state.ShowEyeSlash,cursor: "pointer"}}/>
                                            <FaEye onClick={this.HidePasswordHandler} style={{display:this.state.ShowEye,cursor: "pointer"}}/>
                                            
                                            </span>
                                        </div>
                                </div>
                            </div> 
                            <div class="MyFormGroup form-group">
                                <div class="input-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                        <FontAwesomeIcon icon={faLock} /></span>
                                    </div>
                                    <input type={this.state.cpasswordtype} class="MyFormControl form-control" aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm" placeholder="Confirm Password"
                                        onChange={(e)=>{this.CPasswordError(this.state.CPasswordPassed);this.CPasswordPassed(e.target.value);}} value={this.state.CPassword} required/>
                                        {this.state.CPasswordError&&<span class="error">Password doesn't match</span>}
                                        
                                        <div class="input-group-prepend">
                                            <span class="MyTxt input-group-text" id="inputGroup-sizing-sm">
                                            <FaEyeSlash onClick={this.showcPasswordHandler} style={{display:this.state.cShowEyeSlash,cursor: "pointer"}}/>
                                            <FaEye onClick={this.HidecPasswordHandler} style={{display:this.state.cShowEye,cursor: "pointer"}}/></span>
                                        </div>
                                </div>
                            </div> 
    
                             
                            <button type="button" id="login" class="Mybutton btn btn-primary btn-block mt-3 form-control" onClick={this.handleData}>Create your account</button>                       
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
