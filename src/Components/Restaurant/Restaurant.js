import React, { Component } from "react";
import "./rest.css";
import img1 from "../../images/4.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from 'sweetalert';
import {
  faAngleDown,
  faStar,
  faLock,
  faTruck,
  faCoins,
  faShoppingCart,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

// import Restaurant from './Restaurant';
import Modal from 'react-bootstrap/Modal';
import Map from '../Become_a_Bartner/files/map';
import{Link} from 'react-router-dom';
import { FaSadCry, FaSadTear } from "react-icons/fa";


class Restaurant extends Component {
  state = {
    RestID: this.props.match.params.id,
    Rest: [],
    Ratee: "",
    Add: {},
    Customer:[],
    Cusine:[],CustomerId:"",Rate:0,comment:""

    ,lat:"",lang:"",mapResult:"",show:false,showspan:"none",
    showbtn:"none",
    CustomerNums:""
  };

  componentDidMount() {
    console.log(this.state.RestID);
    console.log(this.props);
    //this.setState({Rest:this.state.Rest})
    this.getById();
    this.getRate();
    this.getCusin();
    const tokenStr = localStorage.getItem('access_token')
    if(tokenStr!=null){
      this.setState({
        CustomerId:JSON.parse(localStorage.getItem('Customer')).CustomerId
        ,showbtn:"block"
      })
    }
   
  }

  getById() {
    axios
      .get(`https://localhost:44327/api/Rest/${this.state.RestID}`)
      .then((res) => {
        this.state.Rest = res.data;
        this.state.Add = res.data.Address;

        this.setState({
          // RestID: this.state.RestID,
          Rest: this.state.Rest,
         
        });
        // this.setState({
        //   Cusine:this.state.Rest.restaurantCusines.Cuisine
        // })
        console.log(this.state.Rest.Address.BuildingNo);
        console.log(this.state.Add.AddressId);
        console.log(this.state.Add);
        console.log(res.data);
      });
    return this.state.Rest;
  }
  getCusin(){
     axios.get(`https://localhost:44327/api/cusine/${this.state.RestID}`).then(res=>{

      this.setState({Cusine:res.data})
     console.log(res.data,"hello")  
      }) 
  }   
   
  handleShowRateDiv=()=>{

  }
  RatingHandler=()=>{
    swal("Kindly Rate our Services !", {
        buttons: {
          catch: {
            text: "Bad",
            value: "catch",
          },
          defeat: {
            text: "Good",
            value: "defeat",
          },
          Excellent:{
            text: "Excellent",
            value: "Excellent",
          },
          cancel: "Cancel"
        },
      })
      .then((value) => {
        switch (value) {
       
          case "defeat":
            swal("You rated us 3 we hope it would be 5 the next time");
            this.state.Ratee=3
            this.state.comment="Good but not the best"
            this.setState({
                Ratee:this.state.Ratee,
                comment:this.state.comment
            })
            console.log(this.state.Rate)
            const configaa = {
                headers: {
                  'Content-Type':'application/x-www-form-urlencoded',
                  'Accept':'/',
                }
              }
            const promss = new URLSearchParams()
            promss.append('RestaurantId',this.state.RestID)
            promss.append('CustomerId',this.state.CustomerId)
            promss.append('Rate',this.state.Ratee)
            promss.append('Comment',this.state.comment)
      
             
                     let URLLaa=`https://localhost:44327/api/AddRate?id=${this.state.CustomerId}`
                     axios.post(URLLaa,promss,configaa).then(res=>{
                         console.log(res)
                         window.location.reload(false);


                  }).catch(error=>{
                      console.log(error)
                      })
            break;
       
          case "catch":
            swal("You rated us 1,Ohhh please write to us to see if there is something we can do ");
            this.state.Ratee=1
            this.state.comment="Not so good :("
            this.setState({
                Ratee:this.state.Ratee,
                comment:this.state.comment
            })
            console.log(this.state.Ratee)
            const configa = {
                headers: {
                  'Content-Type':'application/x-www-form-urlencoded',
                  'Accept':'/',
                }
              }
            const prmss = new URLSearchParams()
            prmss.append('RestaurantId',this.state.RestID)
            prmss.append('CustomerId',this.state.CustomerId)
            prmss.append('Rate',this.state.Ratee)
            prmss.append('Comment',this.state.comment)
      
             
                     let URLLa=`https://localhost:44327/api/AddRate?id=${this.state.CustomerId}`
                     axios.post(URLLa,prmss,configa).then(res=>{
                         console.log(res)
                         window.location.reload(false);

                  }).catch(error=>{
                      console.log(error)
                      })
            break;
       
          case "Excellent":
            swal("You rated us 5,greaat! Thank you so much");
            this.state.Ratee=5
            this.state.comment="Great Service"
            this.setState({
                Ratee:this.state.Ratee,
                comment:this.state.comment
            })
            const config = {
                headers: {
                  'Content-Type':'application/x-www-form-urlencoded',
                  'Accept':'/',
                }
              }
              const prms = new URLSearchParams()
              prms.append('RestaurantId',this.state.RestID)
              prms.append('CustomerId',this.state.CustomerId)
              prms.append('Rate',this.state.Ratee)
              prms.append('Comment',this.state.comment)
        
               
                       let URLL=`https://localhost:44327/api/AddRate?id=${this.state.CustomerId}`
                       axios.post(URLL,prms,config).then(res=>{
                           console.log(res)
                           window.location.reload(false);

                    }).catch(error=>{
                        console.log(error)
                        })
            console.log(this.state.Rate)
            break;
            
   
        }
      });
     
}

     

  getRate() {
    axios
      .get(`https://localhost:44327/api/Rate/${this.state.RestID}`)
      .then((res) => {
        
        console.log(res.data);
        console.log(res.data["Rate"]);
        //this.state.Rate = res.data[0].Rate;
        this.state.Customer = res.data;
        res.data.forEach(element => {
           this.state.Rate =this.state.Rate + element.Rate
          
           // console.log(x);
            this.setState({Rate:this.state.Rate});
            console.log(res.data.length);
            this.setState({CustomerNums:res.data.length});
            console.log(this.state.Rate);
          
        });
       
        console.log(this.state.Rate);
        let AvgRate=0
        AvgRate = this.state.Rate/res.data.length
        this.state.Rate = Math.floor(AvgRate) 
        console.log(AvgRate);
        this.setState({
          // RestID: this.state.RestID,
          Rate: this.state.Rate,
        });
      });
    return this.state.Rate;
  }

  MapData=(lat,lang)=>{
    this.setState({
      latitude:lat,longtude:lang
    })
  }
  MapResult=(_mapResult)=>{
    this.setState({
      mapResult:_mapResult.split(",")[0]
      
    })
    console.log(this.state.mapResult)
   const res= _mapResult.split(",");
    console.log( _mapResult.split(",")[0])
  }
  handleClose = () =>{
    this.setState({
      show:false,
      showspan:"none"
    })
  };
  handleshoww= () =>{
   this.setState({
     show:true
   })
 };
  render() {
    return (
      <div className="container " id="firstBigContainer">
        <div className="MyContainerCard text-left show ">
          <div id="backimg" >
            <div id="innerbg" >
              <div id="infoo" >
                <img src={this.state.Rest.Image} className="MyImages" />
                <h3>{this.state.Rest.RestaurantName}</h3>
              {
                    this.state.Cusine.map((c)=>{
                                      console.log(c);
                                      return( <span>{c.Cuisine.CuisineName},</span>)
                                                })
                                          }
            
                {/* untill access our real api */}
              
                <h6>
                  <i className="fas fa-map-marker-alt"></i>
                  {this.state.Add.LandMark} - {this.state.Add.Street} -{" "}
                  {this.state.Add.city} - FloorNum : {this.state.Add.floorNo}
                  {/* In Front of Al Nasr Mosque - El Geish Street - El Mansoura */}
                </h6>
              </div>
              {/* <br> */}
              <div className="row  row-cols-lg-7 g-2 g-lg-3  ">
                <div className="col-4 d-none d-md-block ">
                  <div className="p-3">
                    <h4>
                      <FontAwesomeIcon icon={faLock} /> Resturant state
                    </h4>
                    <h5>Open</h5>
                  </div>
                </div>
                <div className="col-4 d-none d-md-block ">
                  <div className="p-3">
                    <h4>
                      <FontAwesomeIcon icon={faTruck} /> Delivery time
                    </h4>
                    <h5>{this.state.Rest.MaxDeliveryTime} mins</h5>
                  </div>
                </div>
                <div className="col-4 d-none d-md-block ">
                  <div className="p-3">
                    <h4>
                      <FontAwesomeIcon icon={faCoins} /> Delivery fees
                    </h4>
                    <h5>20 LE</h5>
                  </div>
                </div>
                <div className="col-4 d-none d-md-block">
                  <div className="p-3">
                    <h4>
                      {" "}
                      <FontAwesomeIcon icon={faShoppingCart} /> Min. Order
                    </h4>
                    <h5>0 LE</h5>
                  </div>
                </div>
                <div className="col-4 d-none d-md-block ">
                  <div className="p-3">
                    <h4>
                      {" "}
                      <FontAwesomeIcon icon={faClock} /> Working Hours
                    </h4>
                    <h5>
                      From {this.state.Rest.StartWorkingHours} to{" "}
                      {this.state.Rest.EndWorkingHours}
                    </h5>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="p-4">
                    <button className="btn btn-warning button__arrow--right" onClick={this.handleshoww}>
                      {" "}
                      Show Menu <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <Modal show={this.state.show} onHide={this.handleClose} >
                      
                      <Modal.Body>   <Map address={this.MapData} MapResult={this.MapResult}/></Modal.Body>
                      <Modal.Footer>
                      <span  style={{display: this.state.showspan ,color:"maroon" }}> Sorry this Resturant doesn't Deliver here <FaSadTear/> </span>
                        <button class="btn btn-danger" variant="secondary" onClick={this.handleClose}>
                          back
                        </button>
                      
                           <button class="btn btn-success" onClick={()=>{
                                  if (this.state.Add.city == this.state.mapResult){
                                    console.log("hiii");
                                  this.props.history.push({pathname:`/MariamShalaby11/Talabat-React/Menu/${this.state.RestID}`,RestID:this.state.RestID})
                                  }
                                  else{
                                  this.setState({
                                    showspan:"block"
                                  })
                                
                                }
                                  
                                }}>Go Order</button>
                              
                        {/* <Link class="btn btn-success" variant="primary"  to={{pathname:`/MariamShalaby11/Talabat-React/Menu/${this.state.Rest.RestID}`}}>
                        Go
                        </Link> */}
                      </Modal.Footer>
                </Modal>
              
                  </div>
                </div>
             

                {/* </div> */}
              </div>
            </div>
            {/* innerbg */}
          </div>
          {/*  backimg */}

          <div id="Description">
            <h3 className="card-title">
              {this.state.Rest.RestaurantName}
              <button onClick={this.RatingHandler} className="btn btn-danger" style={{float:"right",display:this.state.showbtn}}>Rate us !</button>
              <span id="flo">
                <a href="#">
                  <i id="fb" className="fab fa-facebook-square"></i>
                </a>{" "}
                &nbsp;{" "}
                <a href="#">
                  <i id="tw" class="fab fa-twitter-square"></i>
                </a>
              </span>
            </h3>
            <p>
              Holmes is a restaurant located in Egypt, serving a selection of
              Burgers that delivers across El Rehab City, Tagammoa 5 - North
              Investors Extension and Tagammoa 5 - North Investors.
            </p>
            <p>
              {this.state.Rest.Description}
              Their best selling dishes are Cheese Burger Sandwich, Cheesy
              Mushroom Sandwich, Chick N' Chick Sandwich and Chips With Cheese,
              although they have a variety of dishes and meals to choose from,
              like Burger Sandwiches, Burger Sandwiches, Burger Sandwiches and
              Side Items. They have been reviewed <span>24894</span> times by
              talabat users, with a rating of <span>4</span>.
            </p>
          </div>
        </div>
        {/* // leftshow */}
        <div className="container row col-12  d-flex align-items-center mt-4" style={{display:this.state.CustomerNums==0?"none":"block"}}>
          <div class="container" id="part2" style={{display:this.state.CustomerNums==0?"none":"block"}}>
            <div class="col-md-12 row" style={{display:this.state.CustomerNums==0?"none":"block"}}>
              <div class="col-12" style={{display:this.state.CustomerNums==0?"none":"block"}}>
                {/* <br /> */}
                <div class="row " >
                  <h4> {this.state.Rest.RestaurantName} Reviews ({this.state.CustomerNums}) </h4>
                  <p class="text-right offset-4 col-5 ">
                    {/* <span>4.5</span> */}

                    {(() => {
                      switch (this.state.Rate) {
                        case 1:
                          return (
                            <div>
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                            </div>
                          );

                        case 2:
                          return (
                            <div className="d-inline">
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                            </div>
                          );
                        case 3:
                          return (
                            <div>
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                            </div>
                          );

                        case 4:
                          return (
                            <div>
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon icon={faStar} />
                            </div>
                          );

                        case 5:
                          return (
                            <div>
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                              <FontAwesomeIcon
                                style={{ color: "orange" }}
                                icon={faStar}
                              />
                            </div>
                          );
                      }
                    })()}

                    <p className="d-inline">( {this.state.Rate} ratings )</p>
                  </p>
                </div>
                <br />
              </div>
              <br />
              <br />
            </div>
          </div>
          {/* average Reviews */}

          <div class="col-md-3 ">
            {/* <span>4.5</span> */}
            {(() => {
              switch (this.state.Rate) {
                case 1:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 2:
                  return (
                    <div className="d-inline">
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );
                case 3:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 4:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 5:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                    </div>
                  );
              }
            })()}
            <div style={{display:this.state.CustomerNums==0?"none":"block"}}>Order Packaging</div>
          </div>
          <div class="col-md-3">
            {/* <span>4.5</span> */}
            {(() => {
              switch (this.state.Rate) {
                case 1:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 2:
                  return (
                    <div className="d-inline">
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );
                case 3:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 4:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 5:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                    </div>
                  );
              }
            })()}
            <div style={{display:this.state.CustomerNums==0?"none":"block"}}>Value for money</div>
          </div>
          <div class="col-md-3">
            {/* <span>4.5</span> */}
            {(() => {
              switch (this.state.Rate) {
                case 1:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 2:
                  return (
                    <div className="d-inline">
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );
                case 3:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 4:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 5:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                    </div>
                  );
              }
            })()}
            <div style={{display:this.state.CustomerNums==0?"none":"block"}}>Delivery Time</div>
          </div>
          <div class="col-md-3">
            {/* <span>4.5</span> */}
            {(() => {
              switch (this.state.Rate) {
                case 1:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 2:
                  return (
                    <div className="d-inline">
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );
                case 3:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 4:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  );

                case 5:
                  return (
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "orange" }}
                        icon={faStar}
                      />
                    </div>
                  );
              }
            })()}
            <div style={{display:this.state.CustomerNums==0?"none":"block"}}>Quality of food</div>
          </div>
        </div>
        {/* orderPacking Review  */}
        <br />
        <div class="card col-12 reviewCard">
          
          {
              this.state.Customer.map((c)=>{
                  return(
            <div class="card-body mb-4">
            <div class="col-md-3">
           
              {(() => {
                switch (c.Rate) {
                  case 1:
                    return (
                      <div>
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    );

                  case 2:
                    return (
                      <div className="d-inline">
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    );
                  case 3:
                    return (
                      <div>
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    );

                  case 4:
                    return (
                      <div>
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    );

                  case 5:
                    return (
                      <div>
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          style={{ color: "orange" }}
                          icon={faStar}
                        />
                      </div>
                    );
                }
              })()}{" "}
               <div>
                <h5>{c.Comment}</h5>
              </div>
              <p>{c.Customer.FirstName} {c.Customer.LastName}</p>
             
            </div>
            <div>
              <p class="card-text text-right">23 November 2020</p>
            </div>
            
            <br />
          </div>
          
        //  {/* cardbody  only one review */}
                  )
              })
             
          }
          <br/>


<h3 style={{display:this.state.CustomerNums==0?"block":"none",textAlign: "center"}} > There Are No Ratings yet</h3>
        
          
        </div>
        {/* all users Review  (col-12 div)*/}
        {/* // // container */}
         <br/>
      </div>
    );
  }
}

export default Restaurant;