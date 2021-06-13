import React from 'react';
import'./Homepage.css';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../images/food.jpg';
import slide2 from '../../images/Delivery.jpg';
import slide3 from '../../images/partner2.jpg';
import slide4 from '../../images/bread.jpg';
import slide5 from '../../images/burgers.jpg';
import { FaFire, FaHamburger, FaLocationArrow, FaMapMarkedAlt, FaMapMarkerAlt, FaTruckLoading} from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import{BrowserRouter as Router,Link} from 'react-router-dom';
import axios from 'axios';
import Map from '../Become_a_Bartner/files/map';
import Modal from 'react-bootstrap/Modal';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default class Home extends React.Component{
    state={
      Resturants:[],
      Cities:[],show:false,
      lat:"",lang:"",mapResult:""
      ,City:"",selectedCity:""

    }
    async componentDidMount(){
      await axios.get('https://localhost:44327/api/RestrauntAddresses').then(res=>{
          this.setState({Cities:res.data})
    
         console.log(res.data)
           })
           axios.get(`https://localhost:44327/api/GetCities`).then(x=>{
            this.setState({City:x.data})})
           axios.get(`https://localhost:44327/api/TopRatedRestaunt/cairo`).then(res=>{
            this.setState({Resturants:res.data})})
          } 
     ResturantList=(i)=>{
       axios.get(`https://localhost:44327/api/TopRatedRestaunt/${i}`).then(res=>{
        this.setState({Resturants:res.data})
       console.log(res.data)
         })
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
      console.log(_mapResult)
     const res= _mapResult.split(",");
      console.log( _mapResult.split(",")[0])
    }
      handleClose = () =>{
         this.setState({
           show:false
         })
       };
       handleshoww= () =>{
        this.setState({
          show:true
        })
      };
      handleselect=(x)=>{
        this.setState({
          selectedCity:x
        })

      }
    
  
  
    render(){
        return(
 <>       

 <Carousel  id="carouselExampleIndicators" class="carousel slide carousel-slider" data-ride="carousel">
          <Carousel.Item class="carousel-item active">
                <img className="d-block w-100 slider " src={slide1} alt="First slide" />
               < Carousel.Caption class="carousel-caption d-md-block carouselword">
                    <h1 className="m-b-20 headerr"><strong>Welcome <span></span> To FoodAway </strong></h1>
                    <h6 className="m-b-40  ">Join Us now And Fullfill your cravings !</h6>
                   
                    <p> 
                     <Router>
                      <HashLink className="btn btn-lg btn-circle btn-outline-new-white" smooth to='/MariamShalaby11/Talabat-React/Home/#map'> Order </HashLink>
                    </Router>
                   </p>  
                    {/* <p><a class="btn btn-lg btn-circle btn-outline-new-white" href="#map"> Order </a></p> */}
                </Carousel.Caption>
            </Carousel.Item>
          <Carousel.Item class="carousel-item">
            <img class="d-block w-100 slider" src={slide2} alt="Second slide" />
            <Carousel.Caption class="carousel-caption  d-md-block carouselword">
                <h1 class="m-b-20 headerr"><strong>Welcome To FoodAway </strong></h1>
                <p class="m-b-40">And Enjoy the fastest Delivery For your Favourite food Right to your Door !</p>
                <Router>
                      <HashLink class="btn btn-lg btn-circle btn-outline-new-white" smooth to='/MariamShalaby11/Talabat-React/Home/#info' > Order </HashLink>
                </Router>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item class="carousel-item">
            <img class="d-block w-100 slider" src={slide3} alt="Third slide" />
            <Carousel.Caption class="carousel-caption d-md-block carouselword">
                <h1 class="m-b-20 headerr"><strong>Welcome To FoodAway  </strong></h1>
                <p class="m-b-40">Become Our partner and Reach New Customers And get more Sales !</p>
                <Link class="btn btn-lg btn-circle btn-outline-new-white " to={{pathname:"/MariamShalaby11/Talabat-React/BecomePartner"}}>Become a partner</Link>
             
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item class="carousel-item">
                <img class="d-block w-100 slider" src={slide4}  />
                <Carousel.Caption class="carousel-caption d-md-block carouselword">
                <h1 class="m-b-20 headerr"><strong style={{color:"#810000",fontSize:60}}>Welcome To FoodAway  </strong></h1>
                    <p class="m-b-40">Explore variety of Resturants!</p>
                    
                   <Link class="btn btn-lg btn-circle btn-outline-new-white " to={{pathname:"/MariamShalaby11/Talabat-React/AllResturants"}}>All Resturants</Link>
                   
                </Carousel.Caption>
          </Carousel.Item>           
</Carousel> 


                  {/* -------------------------------------------map---------------------------------------------------- */}
      <div id="map">
   
       <h1>Enter the city you want to deliver to  </h1>
            <div class="row justify-content-center ">
              {/* <form  class="col-lg-7 col-12  row justify-content-center"> */}
                    <div class="col-lg-4 col-12  input-group" id="mapinput">
                  
                        <div class="input-group-prepend">
                        <span class="input-group-text bg-transparent iconstyle" ><FaMapMarkerAlt/></span>
                        </div>
                        <Typeahead    options={this.state.City} class="form-control" id="maptxt"  placeholder="Search for your city"  
                        onChange={(selectedCity) => {this.setState({selectedCity});}}
                         selected={this.state.selectedCity}/>
                        {console.log(this.state.selectedCity)}
                        <div class="input-group-append">
                  
                          <button id="mapbtnn"  onClick={this.handleshoww}> <span class="input-group-text bg-transparent iconstyle" style={{color:"#810000"}}><FaLocationArrow/></span> </button>
                          
                            <Modal show={this.state.show} onHide={this.handleClose} >
                      
                                  <Modal.Body>   <Map address={this.MapData} MapResult={this.MapResult}/></Modal.Body>
                                  <Modal.Footer>
                                    <button class="btn btn-danger" variant="secondary" onClick={this.handleClose}>
                                      back
                                    </button>
                                  
                                    <Link class="btn btn-success" variant="primary"  to={{pathname:`/MariamShalaby11/Talabat-React/filters/${this.state.mapResult}`,selectedCity:this.state.mapResult}}>
                                    Go
                                    </Link>
                                 
                                  </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                        <div class="col-md-2  "> 
                            <Link class="btn btn-warning" id="MyMapButton" to={{pathname:`/MariamShalaby11/Talabat-React/filters/${this.state.selectedCity}`,selectedCity:this.state.selectedCity}} >Let's go</Link>
                        </div>
              {/* </form> */}
            </div>
        </div> {/*endmap */}

     {/* -------------------------------------how it works-------------------------------------------------------- */}

      <div id="info">

        <div>
        <h1 style={{color:"black"}}>How it Works ! </h1>
        <p style={{color:"grey"}}>Your favourite Meals in 3 steps</p>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-lg-4 col-12">
          <div class="card shadow-none cardes">
            <div class="card-header bg-transparent cardnumber"><span class="num">1</span></div>
            <div class="card-body bg-transparent">
              <h1 className="iconss"><FaMapMarkedAlt/></h1>
              <h5 class="card-title" style={{fontWeight:"bold"}}>Search by Address</h5>
              <p class="card-text">Find all restaurants available in your zone.</p>
            </div>
          </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="card shadow-none cardes">
              <div class="card-header bg-transparent cardnumber"><span  class="num">2</span></div>
              <div class="card-body bg-transparent">
                <h1 className="iconss"><FaHamburger/></h1>
                <h5 class="card-title" style={{fontWeight:"bold"}}>Choose your Meal</h5>
                <p class="card-text">Choose your favourite meal from more than 120,000 meals in Egyptian Restaurants.</p>
              </div>
            </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="card shadow-none cardes">
                <div class="card-header bg-transparent cardnumber"><span  class="num">3</span></div>
                <div class="card-body bg-transparent">
                  <h1 className="iconss"><FaTruckLoading/></h1>
                  <h5 class="card-title" style={{fontWeight:"bold"}}>Enjoy your Food</h5>
                  <p class="card-text">Receive your favorite meal and pay on delivery.</p>
                </div>
              </div>
            </div>

        </div>
      </div>  {/*End how it works*/}

{/* --------------------------------------------Resturants-------------------------------------------------- */}

<h1 id="restHead" > Most Popular Resturants<span style={{color:"#810000"}}> <FaFire/></span> </h1>

 <div class="container  row" id="restcontainer">
    <div class="col-lg-3 col-12 ">
            {
                 this.state.Cities.map((cty,i)=>{
                return(
                          <button class="btn btn-light form-control cityButtons" onClick={()=>this.ResturantList(cty.city)}>{cty.city}</button>
                  
                 )
                })
            }
              </div>
        <div class="col-lg-9">
            <div class=" row">
            {
                 this.state.Resturants.map((Rest)=>{
                return(
                <div class="card col-lg-4 col-12 shadow-none cardes">

                    <img class="card-img-top cardimgs"  src={slide5} alt="Card image cap"/>
                    <div class="card-body bg-transparent">
                        <h5 class="card-title bg-transparent">{Rest.RestaurantName}</h5>
                    </div>
                </div>
                
                  )
                })
            }  
                 
                
                
            </div>
        </div>
   </div>
 
</>
        )

        
    }
}
