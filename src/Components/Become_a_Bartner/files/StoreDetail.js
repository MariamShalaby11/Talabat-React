import React, { Component } from 'react'; 
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FaFire, FaHamburger, FaLocationArrow, FaMapMarkedAlt, FaMapMarkerAlt, FaTruckLoading} from "react-icons/fa";


import Map from '../files/map.js'


export default class StoreDetail extends React.Component{
        constructor(props){
            super(props);
     
            this.state={
              show:false,floorno:"",Landmark:"",street:"",buildingno:"",City:"",District:"",
              RestaurantNameError:false,WebsiteError:false,CityError:false,StreetError:false,LandmarkError:false,
              RestaurantNamePassed:false,WebsitePassed:false,CityPassed:false,StreetPassed:false,LandmarkPassed:false,
              
              RestaurantName:"",Website:"",Description:"",latitude:0,longtude:0,mapResult:""
            }
            
        }
        handleClose = () =>{
          this.setState({
            show:false
          })
        };
        handleshow= () =>{
         this.setState({
           show:true
         })
       };
        handlefloorno=(e)=>{
          this.state.floorno=e.target.value 
          this.setState({
              floorno:this.state.floorno
          })
         // console.log(this.state.floorno)
      }
      handleLandmark=(e)=>{
          this.state.Landmark=e.target.value
          this.setState({
              Landmark:this.state.Landmark
          })
         // console.log(this.state.Landmark)
      }
      handlebuilding=(e)=>{
          this.state.buildingno=e.target.value
          this.setState({
              buildingno:this.state.buildingno
          })
         // console.log(this.state.buildingno)
      }
      handlecity=(e)=>{
          this.state.City=e.target.value
          this.setState({
              City:this.state.City
          })
         // console.log(this.state.City)
      }
      handleDistrict=(e)=>{
          this.state.District=e.target.value
          this.setState({
          District:this.state.District
          })
         // console.log(this.state.District)
      }
      handlestreet=(e)=>{
          this.state.street=e.target.value
          this.setState({
          street:this.state.street
          })
         // console.log(this.state.street)
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
          const validWebSite = new RegExp( '^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$');
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
        StreetError=(e)=>{
          if(!e){
               
               this.setState({StreetError:true})
           }else{
              this.setState({StreetError:false})
           }
        }
        StreetPassed=(e)=>{
          const validName = new RegExp(
              '^[a-zA-Z]{3,9}$'
           );
           if(!validName.test(e)){
               this.setState({StreetPassed:false,StreetError:true,Street:e})
           }else{
              this.setState({StreetPassed:true,StreetError:false,Street:e})
           }
        }
        CityError=(e)=>{
          if(!e){
               
               this.setState({CityError:true})
           }else{
              this.setState({CityError:false})
           }
        }
        CityPassed=(e)=>{
          const validName = new RegExp(
              '^[a-zA-Z]{3,9}$'
           );
        
           if(!validName.test(e)){
               this.setState({CityPassed:false,CityError:true,City:e})
           }else{
              this.setState({CityPassed:true,CityError:false,City:e})
           }
        }
        LandmarkError=(e)=>{
          if(!e){
               
               this.setState({LandmarkError:true})
           }else{
              this.setState({LandmarkError:false})
           }
        }
        LandmarkPassed=(e)=>{
          const validName = new RegExp(
              '^[a-zA-Z]{3,9}$'
           );
           if(!validName.test(e)){
               this.setState({LandmarkPassed:false,LandmarkError:true,Landmark:e})
           }else{
              this.setState({LandmarkPassed:true,LandmarkError:false,Landmark:e})
           }
        }
       join=()=>{
         console.log("in join")
         console.log(this.state)
         console.log(this.props.data)

         if(this.state.RestaurantNamePassed&&this.state.WebsitePassed){
           if(this.state.City.length<4 || this.state.District.length<4)
           {
             alert("please set your correct location")

           }
           else{

           
                console.log("jhhgggg")
              // const dataa={
              // FirstName:this.props.data.FirstName,LastName:this.props.data.LastName,Email: this.props.data.Email,
              // Username: this.props.data.UserName,Password:this.props.data.Password,CPassword:this.props.data.CPassword,MobileNumber: this.props.data.Mobile,
              // RestaurantName:this.state.RestaurantName,Website:this.state.Website,latitude:this.state.latitude,
              // longtude: this.state.longtude,FullAddress:this.state.mapResult
              // }
              const {FirstName,LastName,Email,Password,CPassword,UserName}=this.props.data;
              const{RestaurantName,Website,City,Landmark,Street,Description}=this.state;
              console.log(this.state)
              console.log(this.props.data)

              const params = new URLSearchParams()
              params.append('UserName',UserName)
              params.append('Password', Password)
              params.append('Email', Email)
              params.append('ConfirmPassword', CPassword)
              params.append('FirstName', FirstName)
              params.append('LastName', LastName)
              params.append('Description', Description)
              params.append('RestaurantName', RestaurantName)
              params.append('Website', Website)
              params.append( 'BuildingNo',this.state.buildingno)
              params.append('Street', this.state.street)
              params.append( 'floorNo', this.state.floorno)
              params.append( 'LandMark', this.state.Landmark)
              params.append('city', this.state.City)
              params.append('District', this.state.District)
              const config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  
                }
              }

             const URL='https://localhost:44327/api/PartnerRegistration';
              axios.post(URL, params,config)
              .then((res) => {
              console.log(res.data.StatusCode)
              if(res.data.StatusCode==400)
              {
                alert("Please Select Your Place and check your data correction");
              }
              else if(res.data.StatusCode==409){
                alert("This username is already taken ,please choose another one");
              }
              else{
                this.props.Join(true,false);
              }
              })
              .catch((err) => { 
                console.log(err)

              // alert("Please Select Your Place and check your data correction");
              });
              }
            }
      else{
        console.log("false condition")
        this.RestaurantNameError(this.state.RestaurantName);
        this.WebsiteError(this.state.Website);
        // this.CityError(this.state.City);
        // this.StreetError(this.state.Landmark);

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
                      <div>
                      {this.state.WebsiteError&&<span class="error">Wrong WebSite Format</span>}
                                  <label class="d-block">Description</label>
                          <input type="text" class="input-group-text text-left bg-transparent input-group-append"
                          placeholder="describe your restraunt" onChange={(e)=>{this.setState({Description:e.target.value});console.log(e)}}
                          />
                      </div>
                      <div>

                        <div>
                        <button  class="btn  border w-100 " style={{backgroundColor:'rgb(43, 72, 126)'}}  onClick={this.handleshow} ><span class="mr-2 mt-5">Add Location</span><FaMapMarkerAlt /></button>
                                  <Modal show={this.state.show} onHide={this.handleClose} >
                                                <Modal.Header>
                                                    <h2> Add New Address</h2> 
                                                    <button className="close" onClick={this.handleClose} aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </Modal.Header>
                                                <Modal.Body>  
                                                  <form>
                                              
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                        <label for="Cityinput">City</label>
                                                        <span class="required">*</span>

                                                        <input type="text" class="form-control" id="Cityinput" placeholder="Ex:Cairo" value={this.state.City} onChange={this.handlecity} required/>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                        <label for="Districtinput">District</label>
                                                        <span class="required">*</span>

                                                        <input type="text" class="form-control" id="Districtinput" placeholder="Ex:Zamalik" value={this.state.District} onChange={this.handleDistrict} required/>
                                                        </div>

                                                    </div>
                                                 
                                                    <div class="form-row">
                                                        <div class="form-group col-md-4">
                                                        <label for="Streetno">Street</label>
                                                        <input type="text" class="form-control" id="Streetno" placeholder="ex:abu bakr" value={this.state.street} onChange={this.handlestreet} required/>
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                        <label for="Building">Building Number</label>
                                                        <input type="number" class="form-control" id="Building" placeholder="Building No"  value={this.state.buildingno} onChange={this.handlebuilding} />
                                                        </div>
                                                        <div class="form-group col-md-3">
                                                        <label for="Floor">Floor Number</label>
                                                        <input type="number" class="form-control" id="Floor" placeholder="Floor No"  value={this.state.floorno} onChange={this.handlefloorno}/>
                                                        </div>
                                                      
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-12">
                                                        <label for="Cityinput">Additional information</label>
                                                        <input type="text" class="form-control" id="Landmark" placeholder="Ex:Nady Elgzira" value={this.state.Landmark} onChange={this.handleLandmark}/>
                                                        </div>
                                                      
                                                        
                                                    </div>
                                                   
                                                    {/* <button type="submit" class="btn btn-success"  onClick={this.handleClose}>Save Address</button> */}
                                               </form>
                                    
                                            </Modal.Body>
                                          <Modal.Footer>
                                            <button  style={{backgroundColor:'rgb(43, 72, 126)'}} class="btn btn-danger" variant="secondary" onClick={this.handleClose} >
                                            Save Address
                                            </button>
                                        </Modal.Footer>
                                    </Modal>
                        </div>


                 </div>
                         
                      <div class="d-flex mt-3" >
                      <button class="btn   w-25" onClick={()=>{this.props.ComponentChange(true,this.props.data)}}><FontAwesomeIcon icon={faArrowLeft}/> </button>
                      <button class="btn  border w-100 ml-1" onClick={this.join}>Join</button>
                      </div>
                </div>
            )
        }
    }
  