import React from 'react';
import './Menu.css'
import './MenueContent.css'
import im from '../../images/avatar.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faComment, faSmile, faAppleAlt, faAngleDown, faAngleUp, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Popup } from "semantic-ui-react";
import{BrowserRouter as Router,Link} from 'react-router-dom';
import axios from 'axios';

class Menue extends React.Component {

    state = {
  
      product: [],isActive:[], SellingArray: [],TotalPrice:0
    }
  



    componentDidMount(){

      axios.get(`http://localhost:58160/api/Category/All?id=${2}`).then(

          (cat)=>{
              console.log(cat.data)
              this.state.product=cat.data
              this.setState({
                product:this.state.product
              })
              for(var i=0;i<this.state.product.length;i++)
               this.state.isActive[i]=false;
               this.setState({
                 isActive:this.state.isActive
               })
          }
      )

    }

    saveOrder=()=>{
     console.log(this.state.SellingArray)
     }




    render() {
      return (
        <>
        <div id="divcon" class="container shadow p-3 mb-5 bg-white rounded">
          <div id="divcon1" class="row  shadow-sm p-3 mb-5 bg-white rounded">
            <div class="col-lg-2 col-md-3 col-sm-4">
              <img id="divcon1im" width="140" height="120" src={im} />
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <h4 class=" media-heading f-400 mb-0">
                Om Hassan
                 </h4>
              <span id="spanmedia" class="light-text">in Almazah Egypt</span><br />
              <span id="spanmedia" class="light-text">Grills, Oriental</span><br />
              <span id="spanmedia" class="light-text">in Almazah Egypt</span><br />
            </div>
            <div class="col-lg-4 col-md-2 col-sm-0">
            </div>
            <div class=" col-lg-3 col-md-3 col-sm-2">
              <div id="opendiv" ><p id="openp">OPEN</p></div>
              <div id="divop">
                <FontAwesomeIcon id="iop" icon={faSmile} />
                <span class="lead" id="spop">Very Good</span><br />
                <img width="50" height="30" src="https://km.visamiddleeast.com/dam/VCOM/blogs/visa-blue-gradient-800x450.jpg" />
                <img width="40" height="30" src="https://www.osservatorioantitrust.eu/en/wp-content/uploads/2019/01/MasterCard_Logo_svg.png" />
                <img width="40" height="30" src="https://w1.pngwing.com/pngs/961/314/png-transparent-green-leaf-logo-money-loan-bank-cash-money-bag-banknote-grant.png" />
              </div>
            </div>
          </div>
          <div class="container" id="contap">
            <div class="topnav">
              <a id="tabs" class=" col-12 active element" ><FontAwesomeIcon id="icontap" icon={faAppleAlt} /> Menu</a>
            </div>
          </div>
  
  
          <div class="row b" id="block1" >
            <div class="col-lg-3 col-md-6">
              <div id="CardWShadow" class="card shadow-sm p-3 mb-5 bg-white rounded">
                <div class="card-body">
                  <h5 class="card-title">Categories</h5>
                  <div id="category">
  
                  {
                    this.state.product.map(
                      (prod,i)=>{
                          return(
                            <p class="h6 CategoryLink" style={{cursor:'pointer'}} onClick={()=>{
                              [this.state.product[0],this.state.product[i]]=[this.state.product[i],this.state.product[0]]
                              this.setState({
                                product:this.state.product
                              })
                            }
                            }>{prod.Name}</p>
                          )
                      }
                    )
                  }
  
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search Menue Item" />
              </div>
              <div className="accordion" id="ad" >
                <div className="accordion-item">
                  {
                    this.state.product.map((prod, i) => {
  
                      return (
                        <> <div className="accordion-title" onClick={() => {
                          this.state.isActive[i] = !this.state.isActive[i];
                          this.setState({
                            isActive: this.state.isActive
                          })
                        }}>
                          <div id="accorwrap" className="row">
                            <h4 className="col-lg-8 col-md-7 col-sm-9" >{prod.Name}</h4>
                            <div className=" arrow col-lg-3 col-md-4 col-sm-2">{this.state.isActive[i] ? <FontAwesomeIcon id="icontap" icon={faAngleDown} /> : <FontAwesomeIcon id="icontap" icon={faAngleUp} />}</div>
                          </div>
  
                        </div>
  
                          {
                            this.state.isActive[i]
                            && <div className="accordion-content">
  
                              <div id="accordionBody">
                                {prod.Meals.map(
  
                                  (Mel, j) => {
  
                                    return (
                                      <>
                                        <div class="row" id="conMargin">
                                          <div class="col-3"><Popup  trigger={<img width="80" height="80" src={im} />} position="top center" >
                                         <div class="card" style={{padding:7}}><img src={im} width="100" height="100" /></div>
                                            </Popup></div>
                                          <div class="col-5">
                                            <p>{Mel.Mealname}</p>
                                          </div>
                                          <div class="col-3">
                                            <p>{Mel.MealPrice} LE</p>
                                            <p>{"Very Good"}</p>
                                          </div>
                                          <div class="col-1" id="iconplusWraperPadding">
                                            <div>
                                              <FontAwesomeIcon id="iconplusWraperPosition" icon={faPlus}
                                                onClick={() => {
  
                                                  if (this.state.SellingArray.length == 0) {
                                                    this.state.SellingArray.push(Mel)
                                                    Mel.count = 1
  
                                                  } else if(!this.state.SellingArray.find(a => Mel.MealId == a.MealId)) {
                                                    
                                                      this.state.SellingArray.push(Mel)
                                                      Mel.count = 1
                                                    }
                                                    else{
                                                      Mel.count++;
                                                      
                                                    }
                                                  this.state.TotalPrice+=Mel.MealPrice
                                                  this.setState({
                                                    SellingArray: this.state.SellingArray,
                                                    TotalPrice:this.state.TotalPrice
                                                  })
                                                }
                                                }
                                              />
                                            </div>
                                          </div>
  
                                        </div>
                                        <hr />
                                      </>
                                    )
                                  }
                                )}
  
                              </div>
                            </div>
                          }
                        </>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div id="CardContainer" >
                <h4 id="CardHeaderColor">Your Cart</h4>
              </div>
              <div id="LockIconContainer" >
                {this.state.SellingArray.length == 0 && <div>
                  <svg xmlns="http://www.w3.org/2000/svg" id="svgProp" width="100" height="100" fill="#CDC6BF" class="bi bi-lock" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                  </svg>
                  <h6 id="textnone">There are no Item in cart</h6>
                </div>}
                {this.state.SellingArray.length != 0 && <div class="card" id="wraperContainerCard">
                  <div id='cardContent1'><span class='h6'>Om Hassan</span> - <span>Almaza</span></div>
                  {
                    this.state.SellingArray.map(
  
                      (selling, x) => {
  
                        return (<div id='cardContent2' >
                          <div class="row" style={{padding:10}}>
                            <div class='col-4'>
                              <div class="row">
                                <div class="col-5" onClick={
                                  () => {
                                    selling.count++;
                                    this.state.TotalPrice+=selling.MealPrice
                                    this.setState({
                                      SellingArray: this.state.SellingArray,
                                      TotalPrice:this.state.TotalPrice
                                    })
                                  }
  
                                } id="incDiv"> <FontAwesomeIcon id="inc" icon={faPlus} /></div>
                                {selling.count}
                                <div class="col-5" onClick={
                                  () => {
  
                                    if (selling.count == 1) {
                                      this.state.SellingArray.splice(x, 1);
                                      this.state.TotalPrice-=selling.MealPrice;
                                    }
                                    else {
                                      selling.count--;
                                      this.state.TotalPrice-=selling.MealPrice
                                    }
                                    this.setState({
                                      SellingArray: this.state.SellingArray,
                                      TotalPrice:this.state.TotalPrice
                                    })
                                  }
  
                                } id="incDiv"><FontAwesomeIcon id="inc" icon={faMinus} /></div>
  
                              </div>
                            </div>
                            <div class='col-4'>{selling.Mealname}</div>
                            <div class='col-4'><small>{selling.MealPrice*selling.count}</small></div>
                          </div>
                        </div>)
                      }
                    )
                  }

                  <div class="row">
                    <div class="col-6" style={{padding:10}}>SubTotal</div>
                    <div class="col-6" style={{padding:10}}>{this.state.TotalPrice}</div>
                    <div class="col-6" style={{padding:10}}>Delivery Fee</div>
                    <div class="col-6" style={{padding:10}}>{20}</div>
                    <div class="col-6" style={{padding:10}}>Total Amount</div>
                    <div class="col-6" style={{padding:10}}>{this.state.TotalPrice+20}</div>
                    <div class="col-12" style={{padding:10}}>
                    <Link class="btn btn-success" variant="primary"  to={{pathname:`/MariamShalaby11/Talabat-React/Checkout` ,selectedArray:this.state.SellingArray,subTotal:this.state.TotalPrice}}> Proceed to Checkout</Link>
                    </div>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
  
        </>
      )
    }
   

  }
  
  export default Menue;