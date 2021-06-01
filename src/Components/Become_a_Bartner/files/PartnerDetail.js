import React, { Component } from 'react'; 

import 'bootstrap/dist/css/bootstrap.css';

export default class PartnerDetail extends React.Component{
    constructor(props){
        super(props);
        const { Partner, FirstName,LastName,Email,Password,CPassword,UserName,Mobile,StoreName,Website}=this.props.data;

        this.state={
            FirstNameError:false, LastNameError:false ,EmailError:false,MobileError:false,
            PasswordError:false,CPasswordError:false,UserNameError:false,
            FirstNamePassed:false,LastNamePassed:false,Emailpassed:false,MobilePassed:false,
            PasswordPassed:false,CPasswordPassed:false,UserNamePassed:false,
            FirstName:FirstName,LastName:LastName,Email:Email,Password:Password,CPassword:CPassword,UserName:UserName,Mobile:Mobile
        }

    }
    componentDidMount(){
   
    }
    FirstNameFormat=(e)=>{
      this.setState({FirstName:e.target.value})

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
    LastNameFormat=(e)=>{
      this.setState({LastName:e.target.value})
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
   EmailFormat=(e)=>{
      this.setState({Email:e.target.value})
  
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

    MobileFormat=(e)=>{
      this.setState({Mobile:e.target.value})
      
    }
    MobileError=(e)=>{
      if(!e){
          this.setState({MobileError:true})
      }else{

         this.setState({MobileError:false})
      }
    }
    MobilePassed=(e)=>{
      const validMobile = new RegExp('(01)[0-9]{9}');
      if(!validMobile.test(e)){
          console.log("mpaseed")
          this.setState({MobilePassed:false,MobileError:true,Mobile:e})
      }else{
          console.log("m nooooo")

         this.setState({MobilePassed:true,MobileError:false,Mobile:e})
      }
    }

    validatePartnerData=()=>{
  
      this.MobilePassed(this.state.Mobile)
      this.FirstNamePassed(this.state.FirstName)
      this.LastNamePassed(this.state.LastName)
      this.EmailPassed(this.state.Email)
      this.UserNamePassed(this.state.UserName)
      this.PasswordPassed(this.state.Password)
      this.CPasswordPassed(this.state.CPassword)


      const {FirstNamePassed,LastNamePassed,Emailpassed,PasswordPassed,CPasswordPassed,UserNamePassed,MobilePassed}=this.state;
      let x=FirstNamePassed&&LastNamePassed&&MobilePassed&&Emailpassed&&UserNamePassed&&PasswordPassed&&CPasswordPassed;
      
      this.props.ComponentChange(!x,this.state);
    }
    render(){
        return(
            <div class="mt-3">
                 <div>
                    <label class="d-inline">First name</label>
                    <span class="required">*</span>
                    <input type="text" class="input-group-text text-left bg-transparent input-group-append" placeholder="Type Your First Name" value={this.state.FirstName}
                     onChange={(e)=>{this.FirstNameError(this.state.FirstNamePassed);this.FirstNamePassed(e.target.value);}} />
                    {this.state.FirstNameError&&<span class="error">First Name sould be character only with Length between(3-9)</span>}
                </div>
                <div>
                  <label class="d-inline">Last name</label>
                  <span class="required">*</span>
                  <input type="text" class="input-group-text text-left bg-transparent input-group-append" 
                  placeholder="Type Your Last name Name" onChange={(e)=>{this.LastNameError(this.state.LastNamePassed);this.LastNamePassed(e.target.value);}} value={this.state.LastName}/>
                  {this.state.LastNameError&&<span class="error">Last Name sould be character only with Length between(3-9)</span>}

                 
                </div>
                <div>
                  <label class="d-inline">Email</label>
                  <span class="required">*</span>
                  <input type="text" class="input-group-text text-left bg-transparent input-group-append"
                   placeholder="example@example.com" onChange={(e)=>{this.EmailError(this.state.Emailpassed);this.EmailPassed(e.target.value);}} value={this.state.Email}/>
                   {this.state.EmailError&&<span class="error">please enter email as ****@****.***</span>}

                  
                </div>
                <div>
                  <label class="d-inline">UserName</label>
                  
                  <input type="text" class="input-group-text text-left bg-transparent input-group-append"
                   placeholder="Type your prefered UserName" onChange={(e)=>{this.UserNameError(this.state.UserNamePassed);this.UserNamePassed(e.target.value);}} value={this.state.UserName}/>
                {this.state.UserNameError&&<span class="error">UserName Required,with charcter only </span>}
               </div>
                <div>
                  <label class="d-inline">Password</label>
                  
                  <input type="text" class="input-group-text text-left bg-transparent input-group-append"
                   placeholder="Type your Password" onChange={(e)=>{this.PasswordError(this.state.PasswordPassed);this.PasswordPassed(e.target.value);}} value={this.state.Password}/>
                 <i class="fa fa-user icon bg-danger"></i>
                  {this.state.PasswordError&&<span class="error">Password should be character with at least one number </span>}
               </div>
               <div>
                  <label class="d-inline">Confirm Password</label>
                  
                  <input type="password" class="input-group-text text-left bg-transparent input-group-append"
                   placeholder="Password Confirmation" onChange={(e)=>{this.CPasswordError(this.state.CPasswordPassed);this.CPasswordPassed(e.target.value);}} value={this.state.CPassword}/>
                {this.state.CPasswordError&&<span class="error">Password doesn't match</span>}
               </div>
                <div>
                  <label class="d-inline">Mobile Number</label>
                  
                  <input type="number" class="input-group-text text-left bg-transparent input-group-append"
                   placeholder="Number Only" onChange={(e)=>{this.MobileError(this.state.MobilePassed);this.MobilePassed(e.target.value);}} value={this.state.Mobile}/>
                {this.state.MobileError&&<span class="error">Mobile Format should be Like (01-123456789)</span>}
               </div>
              <div class="d-flex w-100 " >
               <button class="btn mt-5 border w-100" onClick={this.validatePartnerData}>Next</button>

               </div>
            </div>
        )
    }
}