import React from 'react';
import './Checkout.css';
import Modal from 'react-bootstrap/Modal';
import CreditCardForm from './CreditCardForm';
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import axios from 'axios';
export default class Checkout extends React.Component{

    state={
        show:false,floorno:"",Landmark:"",street:"",buildingno:"",City:"",Mobile:"",District:"",paymentmethod:"",
        ShowCard:"none",
        Subtotal:this.props.location.subTotal,CustomerId:1
     
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

     handleMobile=(e)=>{
        this.setState({
            Mobile:e.target.value
        })
    }
    handlefloorno=(e)=>{
        this.setState({
            floorno:e.target.value
        })
    }
    handleLandmark=(e)=>{
        this.setState({
            Landmark:e.target.value
        })
    }
    handlebuilding=(e)=>{
        this.setState({
            buildingno:e.target.value
        })
    }
    handlecity=(e)=>{
        this.setState({
            City:e.target.value
        })
    }
    handleDistrict=(e)=>{
        this.setState({
        District:e.target.value
        })
    }
    handlestreet=(e)=>{
        this.setState({
        street:e.target.value
        })
    }
    handleCredit=(e)=>{
        this.setState({
            paymentmethod:e.target.value
        })
        this.setState({
            ShowCard:"block"
        })
    

    }
    handleCash=(e)=>{
        this.setState({
            paymentmethod:e.target.value
        })
        this.setState({
            ShowCard:"none"
        })
    }
    handleAddOrder=()=>{
        let newOrder={
            Custmoreid:this.state.CustomerId,
            
        }
        const config = {
            headers: {
              'Content-Type': 'application/json',
              'Accept':'*/*'
            }
          }
        const params = new URLSearchParams()
                    params.append('UserName','Hanya98')
                    params.append('password', 'Hanya@97')
                   

        let URL="https://localhost:44327/api/Orders"
        axios.post(URL,params,config).then(res=>{
            console.log(res)
        }).catch(error=>{
         console.log(error)
        })
        
        // this.props.history.push("/Departments/");

    }

    handleAddAdress=()=>{
        console.log("hiii")
        let newAddress={
            BuildingNo:this.state.buildingno,
            Street: this.state.street,
            floorNo: this.state.floorno,
            LandMark: this.state.Landmark,
            city: this.state.City,
            District: this.state.District,
            Lat:1.3,
            Lang:134.23
        }
        const config = {
            headers: {
              'Content-Type': 'application/json',
              'Accept':'*/*'
            }
          }
        const params = new URLSearchParams()
                    params.append( 'BuildingNo',this.state.buildingno)
                    params.append('Street', this.state.street)
                    params.append( 'floorNo', this.state.floorno)
                    params.append( 'LandMark', this.state.Landmark)
                    params.append('city', this.state.City)
                    params.append('District', this.state.District)
                    params.append('Lat', 1.5)
                    params.append('Lang', 1.6)
                   

        let URL="https://localhost:44327/api/AddAddress"
        axios.post(URL,newAddress,config).then(res=>{
            console.log(res)
            
        }).catch(error=>{
         console.log(error)
        })
        this.props.history.push('Home')

    }

    render(){
        return(
            <div className="container card card-body bg-transparent  " id="paycontainer">
                <h3 style={{padding:6}} id="down">Checkout process</h3>
                <div class="card cont">
                    <div class="card-header bg-transparent cardsheader row">
                    <h5 className="col-9" style={{color:"#810000"}}>Order summary </h5>
                    <button className="cardsbtns col-3 btn"  style={{color:"green"}}>Modify order</button>
                    
                    </div>
                    <div class="card-body  bg-transparent">
                            <table class="table table-hover">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Item(s)</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">price</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.location.selectedArray.map((meals)=>{
                                   return(
                                    <tr>
                                        <th scope="row">{meals.Mealname}</th>
                                        <td>{meals.count}</td>
                                        <td>{meals.MealPrice}</td>
                                    </tr>  
                                    )})}   
                                </tbody>
                         </table>
                       
                    </div>
                </div> {/* End of orders */}
                <div class="card cont">
                    <div class="card-header bg-transparent cardsheader row">
                           <h5 className="col-9" style={{color:"#810000"}}>Delivery Address</h5>
                            <div className="col-3 cardsbtns">
                                <button className="btn" style={{color:"red"}} onClick={this.handleshow}> Add</button>
                                        <Modal show={this.state.show} onHide={this.handleClose} >
                                                <Modal.Header>
                                                    <h2> Add New Address</h2> 
                                                </Modal.Header>
                                                <Modal.Body>  
                                                  <form>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-12">
                                                        <label for="Mobileinput">Mobile number</label>
                                                        <input type="number" class="form-control" id="Mobileinput" placeholder="01-2347474" value={this.state.Mobile} onChange={this.handleMobile}/>
                                                        </div>
                                                       
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                        <label for="Cityinput">City</label>
                                                        <input type="text" class="form-control" id="Cityinput" placeholder="Ex:Cairo" value={this.state.City} onChange={this.handlecity}/>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                        <label for="Districtinput">District</label>
                                                        <input type="text" class="form-control" id="Districtinput" placeholder="Ex:Zamalik" value={this.state.District} onChange={this.handleDistrict}/>
                                                        </div>

                                                    </div>
                                                 
                                                    <div class="form-row">
                                                        <div class="form-group col-md-4">
                                                        <label for="Streetno">Street</label>
                                                        <input type="text" class="form-control" id="Streetno" placeholder="ex:abu bakr" value={this.state.street} onChange={this.handlestreet}/>
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                        <label for="Building">Building Number</label>
                                                        <input type="text" class="form-control" id="Building" placeholder="Building No"  value={this.state.buildingno} onChange={this.handlebuilding} />
                                                        </div>
                                                        <div class="form-group col-md-3">
                                                        <label for="Floor">Floor Number</label>
                                                        <input type="text" class="form-control" id="Floor" placeholder="Floor No"  value={this.state.floorno} onChange={this.handlefloorno}/>
                                                        </div>
                                                      
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-12">
                                                        <label for="Cityinput">Additional information</label>
                                                        <input type="text" class="form-control" id="Landmark" placeholder="Ex:Cairo" value={this.state.Landmark} onChange={this.handleLandmark}/>
                                                        </div>
                                                      
                                                        
                                                    </div>
                                                   
                                                    <button type="submit" class="btn btn-success" onClick={this.handleAddAdress}>Save Address</button>
                                               </form>
                                    
                                            </Modal.Body>
                                          <Modal.Footer>
                                            <button class="btn btn-danger" variant="secondary" onClick={this.handleClose} >
                                            back
                                            </button>
                                        </Modal.Footer>
                                    </Modal>
                                    &nbsp;  &nbsp;  &nbsp;
                                    {/* <button className="btn" style={{color:"green"}}>Edit</button> */}
                            </div>
                      </div>
                    <div class="card-body  bg-transparent">
                        <p class="card-text" style={{padding:5}}>
                        <div className="row" style={{padding:2,paddingLeft:10}}>
                            <p style={{fontWeight:"bold"}}>City :  &nbsp;</p> <p><span> {this.state.City}</span></p>
                            </div>
                            <div className="row" style={{paddingLeft:10}}>
                            <p style={{fontWeight:"bold"}}> ِAddress :  &nbsp;</p> <p><span> {this.state.District},</span> <span> {this.state.street},</span><span> {this.state.buildingno},</span> <span> {this.state.floorno}</span></p>
                            </div>
                            <div className="row" style={{padding:2,paddingLeft:10}}>
                            <p style={{fontWeight:"bold"}}> Additional directions :  &nbsp;</p> <p><span> {this.state.Landmark}</span></p>
                            </div>
                            <div className="row" style={{padding:2,paddingLeft:10}}>
                            <p style={{fontWeight:"bold"}}> Mobile number  :  &nbsp;</p> <p><span> {this.state.Mobile}</span></p>
                            </div>
                        </p>
                     
                      
                    </div>
                </div>{/* End of Address */}

                <div className="card cont">
                    <div className="card-header bg-transparent">
                        <h5 style={{color:"#810000"}}>Payment Summary</h5>

                    </div>
                    <div className="card-body  bg-transparent row">
                        <div className="col-lg-8 col-12" >
                            <div className="card">
                                <div className="card-header bg-transparent">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Visa"    onChange={this.handleCredit}/>
                                            <label class="form-check-label" for="exampleRadios1">
                                             <FaCreditCard style={{color:"red"}}/>   Debit/Credit Card
                                            </label>
                                        </div>
                                </div>
                                <div className="card-body bg-transparent" id="paymentmethodCont" style={{display: this.state.ShowCard }}>
                                <CreditCardForm />    
                                </div>

                            </div>
                            <br></br>
                            <div className="card">
                                <div className="card-header bg-transparent">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Cash"   onChange={this.handleCash}/>
                                            <label class="form-check-label" for="exampleRadios2">
                                           <FaMoneyBillWave style={{color:"green"}}/> Cash
                                            </label>
                                        </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-12">    {/* Cart */}
                                 <table class="table table-sm">
                                     
                                        <tbody>
                                            <tr>
                                            <th >Subtotal</th>
                                            <td>{this.state.Subtotal}</td>
                                          
                                            </tr>
                                            <tr>
                                            <th >Delivery Fees</th>
                                            <td>20</td>
                                            
                                            </tr>
                                            <tr>
                                            <th >total amount</th>
                                            <td>{this.state.Subtotal+20}</td>
                                            
                                            </tr>
                                            <tr >
                                            <td className="col-12" colSpan="2">
                                               <button className="btn btn-success btn-block" onClick={this.handleAddOrder=()=>{

                                               }}>Place order</button>
                                            </td>
                                            </tr>
                                            
                                            
                                        </tbody>
                                </table>
                        

                        </div>

                    </div>

                </div>
   


            </div>
           
            
        )
    }
}
