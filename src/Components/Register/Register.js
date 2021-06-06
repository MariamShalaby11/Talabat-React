import React, { Component } from 'react'; 
import register from '../Register/register.css'
import fa from '../Register/fa.png'
import google from '../Register/google.png'
import b from '../Register/b.jpg'


export default class Register extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            FirstNameError:false, LastNameError:false ,EmailError:false,MobileError:false,
            PasswordError:false,CPasswordError:false,UserNameError:false,
            FirstNamePassed:false,LastNamePassed:false,Emailpassed:false,MobilePassed:false,
            PasswordPassed:false,CPasswordPassed:false,UserNamePassed:false,
            FirstName:"",LastName:"",Email:"",Password:"",CPassword:"",UserName:"",Mobile:0
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
  
    render(){
        return(
            <>
            
<div class=" fadeInDown " id="RegisterConatiner">
       <div class="d-flex justify-content-center ">
          <div class="  d-flex justify-content-center "  id="RegisterForm">
            <form class="d-flex flex-column m-5">
               
               <div class="d-flex flex-column ">
                   <pre>

                   </pre>
                   <pre>
                     
                     </pre>  <pre>
                     
                     </pre>

                    <button class="p-2 mx-auto w-100"><img src={google} class="float-left"/><span >Continue with google</span></button>
                    <button class="p-2 mx-auto w-100"><img src={fa} class="float-left"/><span >Continue with Facebook</span></button>
                </div>

                <h2 class="mx-auto"><span>OR</span></h2>
               
                <div>
                    <div class="d-flex justify-content-between flex-column">
                    <input type="text"  placeholder="Type Your First Name" value={this.state.FirstName}
                     onChange={(e)=>{this.FirstNameError(this.state.FirstNamePassed);this.FirstNamePassed(e.target.value);}} />
                    {this.state.FirstNameError&&<span class="error">First Name sould be character only with Length between(3-9)</span>}
                    
                    <input type="text"  
                  placeholder="Type Your Last name Name" onChange={(e)=>{this.LastNameError(this.state.LastNamePassed);this.LastNamePassed(e.target.value);}} value={this.state.LastName}/>
                  {this.state.LastNameError&&<span class="error">Last Name sould be character only with Length between(3-9)</span>}

                    </div>
                   
                    <div  class="d-flex justify-content-around">
                        <p>First Name Must Be Greater Than 4 charcter</p>
                        <p >First Name Must Be Greater Than 4 charcter</p>
        
                    </div>
                </div>
              
                <div>
                    <div class="d-flex justify-content-between mt-3 mb-3 flex-column">
                        
                    <input type="text" 
                   placeholder="example@example.com" onChange={(e)=>{this.EmailError(this.state.Emailpassed);this.EmailPassed(e.target.value);}} value={this.state.Email}/>
                   {this.state.EmailError&&<span class="error">please enter email as ****@****.***</span>}

                   <input type="number" 
                   placeholder="Number Only" onChange={(e)=>{this.MobileError(this.state.MobilePassed);this.MobilePassed(e.target.value);}} value={this.state.Mobile}/>
                {this.state.MobileError&&<span class="error">Mobile Format should be Like (01-123456789)</span>}
                   </div>
                   
                    <div  class="d-flex justify-content-around">
                        <p>First Name Must Be Greater Than 4 charcter</p>
                        <p >First Name Must Be Greater Than 4 charcter</p>
        
                    </div>
                </div>
               
                <div>
                    <div class="d-flex justify-content-between flex-column">
                    <input type="text" 
                   placeholder="Type your Password" onChange={(e)=>{this.PasswordError(this.state.PasswordPassed);this.PasswordPassed(e.target.value);}} value={this.state.Password}/>
                 <i class="fa fa-user icon bg-danger"></i>
                  {this.state.PasswordError&&<span class="error">Password should be character with at least one number </span>}
                 
                  <input type="password" 
                   placeholder="Password Confirmation" onChange={(e)=>{this.CPasswordError(this.state.CPasswordPassed);this.CPasswordPassed(e.target.value);}} value={this.state.CPassword}/>
                {this.state.CPasswordError&&<span class="error">Password doesn't match</span>}
                        <i class="fas fa-eye-slash  "></i>
    
                    </div>
                   
                    <div  class="d-flex justify-content-around">
                        <p>First Name Must Be Greater Than 4 charcter</p>
                        <p>First Name Must Be Greater Than 4 charcter</p>
        
                    </div>
                </div>
               
                <input type="button" value="Create your account" class="p-3 w-75 mx-auto mt-5"/>  
                <div class="d-flex justify-content-center mt-3">
                    <h5>Already have an account?</h5>
                    <a href="../Login/login.html" class="ml-2">Login</a>  
                </div>
            </form>
          </div>
    
        </div>
</div>

            </>
        )
    }

}