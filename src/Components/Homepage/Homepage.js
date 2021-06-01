import React from 'react';
import'./Homepage.css';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../images/food.jpg';
import slide2 from '../../images/Delivery.jpg';
import slide3 from '../../images/partner2.jpg';
import slide4 from '../../images/burgers.jpg';
import { FaFire, FaHamburger, FaLocationArrow, FaMapMarkedAlt, FaMapMarkerAlt, FaTruckLoading} from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import{BrowserRouter as Router,Link} from 'react-router-dom';
import axios from 'axios';

export default class Home extends React.Component{
    state={
      Resturants:[],
      Cities:[],

    }
    async componentDidMount(){
      await axios.get('http://localhost:58160/Home/RestrauntAddresses').then(res=>{
          this.setState({Cities:res.data})
         console.log(res.data)
           })
          } 
     ResturantList=(i)=>{
       axios.get(`http://localhost:58160/Home/TopRatedRestaunt/${i}`).then(res=>{
        this.setState({Resturants:res.data})
       console.log(res.data)
         })
    }
  
    render(){
        return(
 <>       

 <Carousel  id="carouselExampleIndicators" class="carousel slide carousel-slider" data-ride="carousel">
    

       
          <Carousel.Item class="carousel-item active">
                <img class="d-block w-100 slider " src={slide1} alt="First slide" />
               < Carousel.Caption class="carousel-caption  d-md-block">
                    <h1 class="m-b-20 header"><strong>Welcome To FoodAway </strong></h1>
                    <h6 class="m-b-40 ">Join Us now And Fullfill your cravings !</h6>
                   
                    <p> 
                     <Router>
                      <HashLink class="btn btn-lg btn-circle btn-outline-new-white" smooth to='/MariamShalaby11/Talabat-React/Home/#map' > Order </HashLink>
                    </Router>
                   </p>  
                    {/* <p><a class="btn btn-lg btn-circle btn-outline-new-white" href="#map"> Order </a></p> */}
                </Carousel.Caption>
            </Carousel.Item>
          <Carousel.Item class="carousel-item">
            <img class="d-block w-100 slider" src={slide2} alt="Second slide"/>
            <Carousel.Caption class="carousel-caption  d-md-block">
                <h1 class="m-b-20 header"><strong>Welcome To FoodAway </strong></h1>
                <p class="m-b-40">And Enjoy the fastest Delivery For your Favourite food Right to your Door !</p>
                <Router>
                      <HashLink class="btn btn-lg btn-circle btn-outline-new-white" smooth to='/MariamShalaby11/Talabat-React/Home/#info' > Order </HashLink>
                </Router>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item class="carousel-item">
            <img class="d-block w-100 slider" src={slide3} alt="Third slide"/>
            <Carousel.Caption class="carousel-caption d-md-block">
                <h1 class="m-b-20 header"><strong>Welcome To FoodAway  </strong></h1>
                <p class="m-b-40">Become Our partner and Reach New Customers And get more Sales !</p>
                <p><a class="btn btn-lg btn-circle btn-outline-new-white " href="#">Become A partner</a></p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item class="carousel-item">
                <img class="d-block w-100 slider" src={slide4} alt="Third slide"/>
                <Carousel.Caption class="carousel-caption d-md-block">
                    <h1 class="m-b-20 header"><strong>Welcome To FoodAway </strong></h1>
                    <p class="m-b-40">Explore variety of Resturants!</p>
                    <Router><Link class="btn btn-lg btn-circle btn-outline-new-white " to="/MariamShalaby11/Talabat-React/AllResturants">All Resturants</Link></Router>
                </Carousel.Caption>
          </Carousel.Item>
      
    
       
      
        
</Carousel> 


                  {/* //-------------------------------------------map */}
      <div id="map">
      
            <h1>Enter the city you want to deliver to  </h1>
            <div class="row justify-content-center ">
                <div class="col-lg-4 col-12  input-group ">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1" ><FaMapMarkerAlt/></span>
                    </div>
                    <input class="form-control" id="maptxt" type="text" placeholder="Search for Area , street name or Landmark"></input>
                    <div class="input-group-append">
                    {/* <Tooltip title="Get my Location"> */}
                 <button id="mapbtn"> <span class="input-group-text" id="basic-addon1" style={{color:"#cfa671"}}><FaLocationArrow/></span> </button>
                    </div>
                </div>
            
                <div class="col-lg-2 col-12 "> 
                    <button class="btn btn-warning mapbtn" >Let's go</button>
                </div>
            
            </div>
       
        </div>

     {/* //how it works-------------------------------------------------------- */}

      <div id="info">

        <div>
        <h1 style={{color:"black"}}>How it Works ! </h1>
        <p id="steps">Your favourite Meals in 3 steps</p>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-lg-4 col-12">
          <div class="card shadow-none">
            <div class="card-header bg-transparent "><span class="num">1</span></div>
            <div class="card-body bg-transparent">
              <h1 className="icons"><FaMapMarkedAlt/></h1>
              <h5 class="card-title">Search by Address</h5>
              <p class="card-text">Find all restaurants available in your zone.</p>
            </div>
          </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="card shadow-none">
              <div class="card-header bg-transparent "><span  class="num">2</span></div>
              <div class="card-body bg-transparent">
                <h1 className="icons"><FaHamburger/></h1>
                <h5 class="card-title">Choose your Meal</h5>
                <p class="card-text">Choose your favourite meal from more than 120,000 meals in Egyptian Restaurants.</p>
              </div>
            </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="card shadow-none">
                <div class="card-header bg-transparent "><span  class="num">3</span></div>
                <div class="card-body bg-transparent">
                  <h1 className="icons"><FaTruckLoading/></h1>
                  <h5 class="card-title">Enjoy your Food</h5>
                  <p class="card-text">Receive your favorite meal and pay on delivery.</p>
                </div>
              </div>
            </div>

        </div>
      </div>
{/* //-------------------------Resturants---------------------------------- */}

<h1 id="restHead" > Most Popular Resturants<span style={{color:"Red"}}> <FaFire/></span> </h1>

<div class="container  row  restcontainer ">
<div class="col-lg-3 col-12 ">
<button class="btn btn-light form-control cityButtons" >cairo</button>
            {
                 this.state.Cities.map((cty,i)=>{
                return(
                          <button class="btn btn-light form-control cityButtons" >{cty.city}</button>
                  
                 )
                })
            }
              </div>
        <div class="col-lg-9">
            <div class=" row">
            {
                 this.state.Resturants.map((Rest)=>{
                return(
                <div class="card col-lg-4 col-12 shadow-none">

                    <img class="card-img-top cardimg"  src={Rest.Image} alt="Card image cap"/>
                    <div class="card-body bg-transparent">
                        <h5 class="card-title bg-transparent">{Rest.RestaurantName}</h5>
                    </div>
                </div>
                  )
                })
            }  
                 <div class="card col-lg-4 col-12 shadow-none ">
                    <img class="card-img-top cardimg" src={slide4} alt="Card image cap"/>
                    <div class="card-body bg-transparent">
                        <h5 class="card-title bg-transparent">Foodies</h5>
                    </div>
                </div>
                <div class="card col-lg-4 col-12 shadow-none">
                    <img class="card-img-top cardimg" src={slide4} alt="Card image cap"/>
                    <div class="card-body bg-transparent">
                        <h5 class="card-title bg-transparent">Foodies</h5>
                    </div>
                </div>
                <div class="card col-lg-4 col-12 shadow-none">
                    <img class="card-img-top cardimg" src={slide4} alt="Card image cap"/>
                    <div class="card-body bg-transparent">
                        <h5 class="card-title bg-transparent">Foodies</h5>
                    </div>
                </div>
               
                
   
            </div>
        </div>
      
    </div>
 
</>
        )

        
    }
}
