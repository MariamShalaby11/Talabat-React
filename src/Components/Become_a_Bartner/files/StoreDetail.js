import React, { Component } from 'react'; 

import axios from "axios";

import Map from '../files/map.js'


export default class StoreDetail extends React.Component{
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
         
          var data = new FormData();
          data.append("FirstName", this.props.data.FirstName);
          data.append("LastName", this.props.data.LastName);

          data.append("Email", this.props.data.Email);
          data.append("Username", this.props.data.UserName);
          data.append("Password", this.props.data.Password);
          data.append("CPassword", this.props.data.CPassword);
          

          data.append("MobileNumber", this.props.data.Mobile);
          data.append("RestaurantName", this.state.RestaurantName);
          data.append("Website", this.state.Website);

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
                console.log(err)

                if(err=="Request failed with status code 400"){
                  console.log("fff")
                }
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
  