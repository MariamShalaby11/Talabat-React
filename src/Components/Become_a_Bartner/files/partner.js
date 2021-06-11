import React, { Component } from 'react'; 
import Success from '../files/Success.js'
import logo from '../img/logo.svg'

import BeniftOfBenigPartner from '../files/BeniftOfBenigPartner'
import PartnerDetail from '../files/PartnerDetail'
import StoreDetail from '../files/StoreDetail'

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
            <div class="col-12" id="BecomePartner">
              <div id="header" class="d-flex justify-content-md-between container  ">
                  <div class="ml-md-4">
                     
                  </div>
                  <div class="pt-3 pr-lg-3  mt-5 "><button class="col-12 mt-3">Vendor Portal</button></div>
              </div>
            
              <div id="joining" class="d-md-flex justify-content-between container">
                  <div id="joinText" class="col-md-5">
                      <h1 class="">Reach new customers, get more sales</h1>
                      <h2 class="">Join Talabat, the Middle East's largest delivery platform.</h2>
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
            {this.state.Partner ? <PartnerDetail data={this.state}    ComponentChange={this.handelclick}/> : <StoreDetail  ComponentChange={this.handelclick} data={this.state} Join={this.props.Join}/>}
      
          </>
             )
        }
      }
     
    