import React, { Component } from 'react'; 
import Success from '../files/Success.js'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
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
import img_delivery from '../img/img_delivery.png'
import img_hiring from '../img/img_hiring.png'
import img_live from '../img/img_live.png'
import order_placed from '../img/order_placed.svg'



export default class Partner extends React.Component {
 
        constructor(props) {
          super(props);
        }
        render() {
         return(
                 <div id="container">
              
                  <Joining/>
                  <BeniftOfBenigPartner/>
                 </div>


         )
        }
      }
      class Joining extends React.Component{
        constructor(props) {
            super(props);
           console.log("for join")
            this.state = {
               //tocheck partener or store detail for card
                Partner:true,join:false
              };
        }
   Join=(_join,error)=>{
     console.log("on e"+_join)
     if(_join==true&&error==false){
      this.setState({join:_join})
      this.props.Join(true);
    }
   }
      render(){
 
          return(
               <div class="col-12" >
            <div id="header" class="d-flex justify-content-md-between container">
                <div class="ml-md-4">
                    <img src={logo} class="w-50 "/>
                
                </div>
                <div class="pt-3 pr-lg-3 mr-md-5"><button class="col-12">Vendor Portal</button></div>
            </div>
           
            <div id="joining" class="d-md-flex justify-content-between container">
                <div id="joinText" class="col-md-5 pt-md-5">
                    <h1 class="pt-md-4">Reach new customers, get more sales</h1>
                    <h2 class="pt-md-4">Join Talabat, the Middle East's largest delivery platform.</h2>
                </div>
                <div id="card" class="d-flex ">
                    <div id="maincard" class="d-flex flex-column mx-auto col-10"  >
                      {this.state.join? <Success/>:  <JoiningHeader Join={this.Join} />}
                     
                       
                       
                  </div>
                </div>
                
            </div>
        
       </div>

          )
        }
      }
      

      
      class JoiningHeader extends React.Component{
        constructor(props) {
          super(props);
         
          this.state = {
             //tocheck partener or store detail for card
             Partner:true, FirstName:"",LastName:"",Email:"",Password:"",CPassword:"",UserName:"",Mobile:"",StoreName:"",Website:"",
            };
        }
        
        handelclick=(_partner,partnerdata)=>{
    
           this.setState({
             
            Partner:_partner, FirstName:partnerdata.FirstName,LastName:partnerdata.LastName,Email:partnerdata.Email,
            Password:partnerdata.Password, CPassword:partnerdata.CPassword, UserName:partnerdata.UserName,
             Mobile:partnerdata.Mobile,Website:partnerdata.Website,StoreName:partnerdata.StoreName
            })
         }
  
        render(){
          console.log("rebde")
             return(
              <>
              <h1 class="mt-4 mx-auto pt-4 ">Join Us Today!</h1>
              <div class="mx-auto pt-4" >
                <a  class="mr-lg-5"><span className={this.state.Partner?('activeCart'):""}  >Your details</span></a>
                <a class="ml-lg-5 "><span  className={this.state.Partner?'':'activeCart'} >Store details</span></a>
        
              </div>
            {this.state.Partner ? <PartenerDetail data={this.state}    ComponentChange={this.handelclick}/> : <StoreDetail  ComponentChange={this.handelclick} data={this.state} Join={this.props.Join}/>}
      
          </>
             )
        }
      }
          class PartenerDetail extends React.Component{
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
                 console.log("kkkkkkkkkkkkkkhgff")
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
                '^[a-zA-Z]{3,9}$'
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
                         placeholder="www.example.com" onChange={(e)=>{this.EmailError(this.state.Emailpassed);this.EmailPassed(e.target.value);}} value={this.state.Email}/>
                         {this.state.EmailError&&<span class="error">Wrong Email Format</span>}

                        
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
                        {this.state.PasswordError&&<span class="error">Password should be character with at least one number </span>}
                     </div>
                     <div>
                        <label class="d-inline">Confirm Password</label>
                        
                        <input type="text" class="input-group-text text-left bg-transparent input-group-append"
                         placeholder="Password Confirmation" onChange={(e)=>{this.CPasswordError(this.state.CPasswordPassed);this.CPasswordPassed(e.target.value);}} value={this.state.CPassword}/>
                      {this.state.CPasswordError&&<span class="error">Password doesn't match</span>}
                     </div>
                      <div>
                        <label class="d-inline">Mobile Number</label>
                        
                        <input type="text" class="input-group-text text-left bg-transparent input-group-append"
                         placeholder="(+201)123456789)" onChange={(e)=>{this.MobileError(this.state.MobilePassed);this.MobilePassed(e.target.value);}} value={this.state.Mobile}/>
                      {this.state.MobileError&&<span class="error">Mobile Format should be Like (01-123456789)</span>}
                     </div>
                    <div class="d-flex w-100 " >
                     <button class="btn mt-5 border w-100" onClick={this.validatePartnerData}>Next</button>

                     </div>
                  </div>
              )
          }
      }
      class StoreDetail extends React.Component{
        constructor(props){
            super(props);
     
            this.state={
              RestaurantNameError:false,WebsiteError:false,
              RestaurantNamePassed:false,WebsitePassed:false,
              RestaurantName:"",Website:"",latitude:0,longtude:0,mapResult:""
            }
        }
        WebSiteFormat=(e)=>{
          this.setState({Website:e.target.value})
          
        }
        WebsiteError=(e)=>{
         
          if(!e){
            
              this.setState({WebsiteError:true})
          }else{
             
             this.setState({WebsiteError:false})
          }
        }
        WebSitePassed=(e)=>{
          const validWebSite = new RegExp( '^[a-zA-Z]{3,9}$');
          if(!validWebSite.test(e)){
              
              this.setState({WebsitePassed:false})
          }else{
            this.setState({WebsitePassed:true,Website:e})
          }
        }
        RestaurantNameFormat=(e)=>{
          this.setState({RestaurantName:e.target.value})
          
        }
        RestaurantNameError=(e)=>{
         
          if(!e){
            
              this.setState({RestaurantNameError:true})
          }else{
             
             this.setState({RestaurantNameError:false})
          }
        }
        RestaurantNamePassed=(e)=>{
          const validRestaurantName = new RegExp( '^[a-zA-Z]{1,9}$');
          if(!validRestaurantName.test(e)){
              
              this.setState({RestaurantNamePassed:false})
          }else{
            this.setState({RestaurantNamePassed:true,RestaurantName:e})
          }
        }

       join=()=>{
         console.log("in join")
         
         if(this.state.RestaurantNamePassed&&this.state.WebsitePassed){
          console.log("passed")
          console.log(this.state.mapResult);
          console.log(typeof this.state.latitude)

          var data = new FormData();
          data.append("FirstName", this.props.data.FirstName);
          data.append("LastName", this.props.data.LastName);

          data.append("RestaurantName", this.state.RestaurantName);
          data.append("Email", this.props.data.Email);
          data.append("Website", this.state.Website);
          data.append("MobileNumber", this.props.data.Mobile);
          data.append("latitude", this.state.latitude);
          data.append("longtude", this.state.longtude);
          data.append("FullAddress",this.state.mapResult)
          axios({
            
              method: 'post',
              url: 'http://localhost:58160/BecomePartner/PartnerRegistration',
              data: data,
          })
              .then((res) => {
               
                this.props.join(true,false);

               })
              .catch((err) => { 
                alert("Please Select Your Place and check your data correction");
                


               });
        }
      else{
        this.RestaurantNameError(this.state.RestaurantName);
        this.WebsiteError(this.state.Website);


      }
      }
        MapData=(lat,lang)=>{
          this.setState({
            latitude:lat,longtude:lang
          })
        }
        MapResult=(_mapResult)=>{
          this.setState({
            mapResult:_mapResult
          })
        }
        render(){
      
            return(
                <div class="mt-1">
                     <div>
                          <label class="d-inline">Store name</label>
                          <span class="required">*</span>
                          <input type="text" class="input-group-text text-left bg-transparent input-group-append" placeholder="Type Your store name"
                           onChange={(e)=>{this.RestaurantNameFormat(e);this.RestaurantNamePassed(e.target.value);this.RestaurantNameError(this.state.RestaurantNamePassed)}} value={this.state.RestaurantName}/>
                           {this.state.RestaurantNameError&&<span class="error">Restraunt name Required</span>}

                      </div>
                      <div>
                        <label>Website/Social media</label>
                        <input type="text" class="input-group-text text-left bg-transparent input-group-append" placeholder="www.example.com"
                         onChange={(e)=>{this.WebSiteFormat(e);this.WebSitePassed(e.target.value);this.WebsiteError(this.state.WebsitePassed)}} value={this.state.Website}/>
                        
                      </div>
                      {this.state.WebsiteError&&<span class="error">Wrong WebSite Format</span>}

                      <div>
                        <div>   Drag the Red marker to specify your exact location</div>
                          <Map address={this.MapData} MapResult={this.MapResult}/>
                      </div>
                      <div class="d-flex mt-3" >
                      <button class="btn   w-25" onClick={()=>{this.props.ComponentChange(true,this.props.data)}}>Back</button>
                      <button class="btn  border w-100" onClick={this.join}>Join</button>
                      </div>
                </div>
            )
        }
    }
  
      class BeniftOfBenigPartner extends React.Component{
        constructor(props) {
            super(props);
          }
      render(){
          return(
            <div class="container" id="container2" >
          
                <div class="d-flex flex-column  mt-2 ">
                    <h1 class="mx-auto mt-5  pt-4 ">Benefits of being a Talabat partner </h1>
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
    
                            <img class="mx-auto w-100" src={img_hiring} />

                            <h1 class="mx-auto mt-4 mb-4">No hiring headaches</h1>
                            <p class=" mx-auto  text-md-center">Dont worry about sourcing drivers to deliver your orders. Leave the logistics to us, so you can focus on making great food!</p>
                        </div>
                        <div class=" d-flex flex-column  col-md-4 ml-md-5 mr-md-5 ">
                            <img class="mx-auto w-100" src={img_delivery} />
    
                            <h1 class="mx-auto mt-4 mb-4">Great delivery prices</h1>
                            <p class="mx-auto text-md-center">Customers pay a low delivery fee for orders delivered with Talabat.</p>
                        </div>
                        <div class="d-flex flex-column col-md-4 justify-content-center">
                            <img class="mx-auto w-100" src={img_live} />
    
                            <h1 class="mx-auto mt-4 mb-4 ">Live tracking</h1>
                            <p class="mx-auto text-md-center">Customers can enjoy live tracking of their orders to their doorsteps, giving them an even better experience.</p>
                        </div>
                    </div>  
                
                </div>
          
 
          <figure class="d-flex justify-content-center mt-5 pt-3">
            
             <img  src={fleet_new} />

             <figcaption class="text-primary col-5"> Fleet of over 16000 riders and growing</figcaption>
           </figure>
           
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
            </div>
        
       </div>
     
          )
      } 
      }
      

