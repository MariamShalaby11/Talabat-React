import React from 'react';
import './Accountinfo.css';
import axios from 'axios';

class Accountinfo extends React.Component {

    state = {
        
        selectedflag:"tab1",
        customer:{},CustomerId:JSON.parse(localStorage.getItem('Customer')).CustomerId,
        FirstName:"",LastName:"",Username:"",Email:"",Password:"",CPassword:"",
      ordermeal:[],SellingArray:[]

    }
    
    componentDidMount() {
        //this.setState({Rest:this.state.Rest})
        this.customerinfo();
      this.getorder();
    }

    customerinfo() {

        axios.get(`https://localhost:44327/api/cust/${this.state.CustomerId}`
            ).then(

            (res) => {
                this.state.customer = res.data
                console.log(this.state.customer);
                this.setState({
                    customer: this.state.customer
                });
            }
 
        );
    }
    

    getorder() {
        axios.get(`https://localhost:44327/api/custOrders/${1}`).then(

            (res) => {
                this.state.ordermeal = res.data
                console.log(this.state.ordermeal);
                this.setState({
                    ordermeal: this.state.ordermeal
                });
            }
 
        );
    }


   TabClick = (e,tab) => {
       
        let tablinks = document.getElementsByClassName("element");
         for (var i = 0; i < tablinks.length; i++) {
             tablinks[i].className = tablinks[i].className.replace(" active", "");
         }
         e.currentTarget.className += " active";
         this.state.selectedflag = tab
         this.setState({
                  selectedflag:this.state.selectedflag
         })
        
     }
  
     setEmailstate = (e) => {
        this.state. customer.Email=e.target.value
        this.setState ({
            customer:this.state.customer
         
        })
      }
      setFnamestate = (e) => {
        this.state. customer.FirstName=e.target.value
        this.setState ({
            customer:this.state.customer
         
        })
      }
      setLnamestate = (e) => {
        this.state. customer.LastName=e.target.value
        this.setState ({
            customer:this.state.customer
         
        })
      }
      setpasswordstate = (e) => {
        this.state. customer.Password=e.target.value
        this.setState ({
            customer:this.state.customer
         
        })
      }
     
      setusernamestate= (e) => {
        this.state. customer.Username=e.target.value
        this.setState ({
            customer:this.state.customer
         
        })
      }
      setcpasswordstate= (e) => {

        this.state. customer.CPassword=e.target.value
        this.setState ({
            customer:this.state.customer
         
        })
      }

      customEdit=(i)=>{

        axios.post(`https://localhost:44327/api/editAcc/`+i, 
        {

            CustomerId:this.state.customer.CustomerId,
            FirstName:this.state.customer.FirstName,
            LastName:this.state.customer.LastName,
            Username:this.state.customer.Username,
            Email:this.state.customer.Email,
            Password:this.state.customer.Password,
            CPassword:this.state.customer.CPassword

        }
        
        ).then(res=>{
  
            console.log(res)

        }).catch(error=>{

         console.log(error)

        })
             console.log(this.state.customer);
              
     }


    render() {
       
        return (

            
            <div class="container shadow p-3 mb-5 bg-white rounded" >
                <br></br><br></br> <br></br> <br></br> <br></br><br></br>

              
                <h3>My Account</h3>
                <hr></hr>
                <div class="row" >
                    
                    <div class="col-lg-4 col-md-12">
                        <div class="topnavv">
                            <a class=" h4 col-lg-6 col-md-3 active element" onClick={(e)=>this.TabClick(e,"tab1")} > Account Info</a>
                            <a class=" h4 col-lg-6 col-md-3 element" onClick={(e)=>this.TabClick(e,"tab2")} >My Orders</a>
                        </div>
                       
                        </div>
                       
                     <div class="col-lg-8 col-md-12">
                         {
                             this.state.selectedflag=="tab1"&&(<div>
                                 {
                                
                        <form>
                           
                        <div class="form-group row">

                                <label htmlFor="staticEmail" class="col-sm-2 col-form-label thandlabel">Email</label>
                                <div class="col-sm-10">
                                <input type="text" className="form-control inputt" id="txtemail" value={this.state.customer.Email|| ''} onChange={(e)=>this.setEmailstate(e)} style={{width:350}}></input></div>
                         </div>
                         <div class="form-group row">
                                <label htmlFor="firstname" class="col-sm-2 col-form-label thandlabel">First Name</label>
                                <div class="col-sm-10">
                                <input type="text" className="form-control inputt" id="txtFname" value={this.state.customer.FirstName|| ''} onChange={(e)=>this.setFnamestate(e)}  style={{width:350}}></input></div>
                         </div>
                         <div class="form-group row">
                                <label htmlFor="lastname" class="col-sm-2 col-form-label thandlabel">Last Name</label>
                                <div class="col-sm-10">
                                <input type="text" className="form-control inputt" id="txtLname" value={this.state.customer.LastName|| ''} onChange={(e)=>this.setLnamestate(e)}  style={{width:350}}></input></div>
                         </div>
                         <div class="form-group row">
                                <label htmlFor="text" class="col-sm-2 col-form-label thandlabel">UserName</label>
                                <div class="col-sm-10">
                                <input type="text" className="form-control inputt"  value={this.state.customer.Username|| ''} onChange={(e)=>this.setusernamestate(e)}  style={{width:350}}></input></div>
                         </div>

                         <div class="form-group row">
                                <label htmlFor="Password" class="col-sm-2 col-form-label thandlabel">Password</label>
                                <div class="col-sm-10">
                                <input type="password" className="form-control inputt"  value={this.state.customer.Password|| ''} onChange={(e)=>this.setpasswordstate(e)}  style={{width:350}}></input></div>
                         </div>
                         <div class="form-group row">
                                <label  htmlFor="Password" class="col-sm-2 col-form-label thandlabel">cPassword</label>
                                <div class="col-sm-10">
                                <input type="password" className="form-control inputt" value={this.state.customer.CPassword|| ''} onChange={(e)=>this.setcpasswordstate(e)}  style={{width:350}}></input></div>
                         </div>
                         
                         <input type="button" onClick={() => this.customEdit(1)}  class="btn btn-success inputt" value="update"></input>
                        </form>
                        
                    }
                        </div>)}

                        {
                        this.state.selectedflag=="tab2"&&(<div>

                                <div id="order1">
                                {this.state.ordermeal.length == 0 && <div>
                  <svg xmlns="http://www.w3.org/2000/svg" id="svgProp" width="100" height="100" fill="#CDC6BF" class="bi bi-lock" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                  </svg>
                 <span style={{marginTop:'5'}}> <h6 >There is no Item in card</h6></span>
                </div>}
                                     {this.state.ordermeal.length != 0 && <div class="card" >
                  <div ><span class='h6'>orders</span> </div>
                                  <table>
                                      <th className="thandlabel">meal name</th>
                                        <th  className="thandlabel">meal Describtion</th>
                                        <th  className="thandlabel">meal price</th>
                                        <th  className="thandlabel">meal Discont</th>
                                        
                                     {
                 this.state.ordermeal.map((order,i)=>{
                return(
                    <tr>
                    
                        
                          <td>{order.Mealname}</td>
                        
                      
                          <td>{order.MealDescription}</td>
                         
                         
                          <td>{order.MealPrice}</td>
                         
                          
                          <td>{order.Discount}</td>
                         
                          
                         </tr>
                 )
                })
                                     }
                                   </table>
                       <div class="row">
                   
                    
                  </div>
                </div>            
            }        
                                 </div>

                        </div>)
                             }
                    </div>
                </div>
            </div>

        )
    }

}

export default Accountinfo;