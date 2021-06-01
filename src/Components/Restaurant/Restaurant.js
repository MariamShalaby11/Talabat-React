import React, { Component } from 'react';
import './rest.css';
import img1 from "../../images/4.png";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown , faStar ,faLock ,faTruck ,faCoins, faShoppingCart, faClock, faArrowRight} from "@fortawesome/free-solid-svg-icons";

// import Restaurant from './Restaurant';

class Restaurant extends Component {
    state = { 
        RestID:100,Rest:"",Rate:3
     }

  
    componentDidMount() {
        this.setState({Rest:this.state.Rest})
        this.getById()
    }

    getById() {
        axios.get(`http://localhost:58160/api/Rest/${this.state.RestID}`).then(

           (res) => {
               console.log(res.data);
                this.state.Rest = res.data
                this.setState({
                    RestID: this.state.RestID,
                    Rest:this.state.Rest
                })
            }
        )
        return this.state.RestID
    }
    render() { 
        return ( 
<div className="container col-11">
    <div className="card text-left show ">
        <div id="backimg">
            <div id="innerbg"> 
                    <div id="info">
                        <img src={img1}/>
                        <h3>{this.state.Rest.RestaurantName}</h3> 
                         {/* untill access our real api */}
                        <h6>Burgers</h6>
                        <h6>
                            <i className="fas fa-map-marker-alt"></i>
                            {this.state.Rest.Address}
                            In Front of Al Nasr Mosque - El Geish Street - El Mansoura
                        </h6>
                    </div>
                    {/* <br> */}
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3  ">

                    <div className="col-4 d-none d-md-block ">
                        <div className="p-3">
                            <h4><FontAwesomeIcon icon={faLock}/> Resturant state</h4>
                            <h5>Open</h5>
                        </div>
                    </div>
                    <div  className="col-4 d-none d-md-block ">
                        <div className="p-3">
                            <h4><FontAwesomeIcon icon={faTruck}/> Delivery time</h4>
                            <h5>{this.state.Rest.MaxDeliveryTime} mins</h5>
                        </div>
                    </div>
                    <div  className="col-4 d-none d-md-block ">
                        <div className="p-3">
                            <h4><FontAwesomeIcon icon={faCoins}/> Delivery fees</h4>
                            <h5>20 LE</h5>
                        </div>
                    </div>
                    <div  className="col-4 d-none d-md-block">
                        <div className="p-3">
                            <h4> <FontAwesomeIcon icon={faShoppingCart}/> Min. Order</h4>
                            <h5>0 LE</h5>
                        </div>
                    </div>
                    <div  className="col-4 d-none d-md-block ">
                        <div className="p-3">
                            <h4> <FontAwesomeIcon icon={faClock}/> Working Hours</h4>
                            <h5>From {this.state.Rest.StartWorkingHours} to {this.state.Rest.EndWorkingHours}</h5>
                        </div>
                    </div>
                    <div  className="col-md-4 col-12">
                        <div className="p-4">
                          <button className="btn btn-warning button__arrow--right"> Show Menu <FontAwesomeIcon icon={faArrowRight}/></button>
                        </div>
                    </div>
                   
                    {/* </div> */}
                </div>
            </div>
            {/* innerbg */}
   
        </div>  
        {/*  backimg */}

           <div id="Description">
                <h3  className="card-title">{this.state.Rest.RestaurantName}
                   <span id="flo" ><a href="#"><i id="fb" className="fab fa-facebook-square"></i></a>  &nbsp; <a href="#"><i  id="tw" class="fab fa-twitter-square"></i></a></span> 
                </h3>
                <p>Holmes is a restaurant located in Egypt, serving a selection of Burgers that delivers across El Rehab City, Tagammoa 5 - North Investors Extension and Tagammoa 5 - North Investors.
                </p>
                <p>
                    Their best selling dishes are Cheese Burger Sandwich, Cheesy Mushroom Sandwich, Chick N' Chick Sandwich and Chips With Cheese, although they have a variety of dishes and meals to choose from, like Burger Sandwiches, Burger Sandwiches, Burger Sandwiches and Side Items.
                    
                    They have been reviewed <span>24894</span>  times by talabat users, with a rating of <span>4</span>.</p>
            </div>

    </div>
    {/* // leftshow */}





    <div class="container" id="part2">
     <div class="col-md-12 row">
            <div class="col-12" >
                <br/>
                <div class="row ">
                    <h4>  {this.state.Rest.RestaurantName} Reviews (48) </h4> 
                    <p class="text-right offset-4">
                        <span>4.5</span>
                       

                        <FontAwesomeIcon style={{color:"orange"}} icon={faStar}  />
                        <FontAwesomeIcon style={{color:"orange"}} icon={faStar}/>
                        <FontAwesomeIcon style={{color:"orange"}} icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>     
                        <span>( 4.5 ratings )</span>
                    </p>
                </div>
                <br/>
            </div>
                <br/>
                <br/>
        </div>        
       

    </div>
{/* average Reviews */}


    <div class="card col-12 reviewCard">
        <div class="card-body">
            <div class="col-md-3">
                        <FontAwesomeIcon style={{color:"orange"}} icon={faStar}  />
                        <FontAwesomeIcon style={{color:"orange"}} icon={faStar}/>
                        <FontAwesomeIcon style={{color:"orange"}} icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>     
                        <span>ay hagaa</span>
                <div>
                    <span>ممتاز</span>
                </div>

            </div>
            <div>
                <p class="card-text text-right">23 November 2020</p>

            </div><br/>

        </div>
        <br />
        {/* cardbody  only one review */}

       
              
        <div class="card-body">
                <div class="col-md-3">
                    <FontAwesomeIcon style={{color:"orange"}} icon={faStar}  />
                    <FontAwesomeIcon style={{color:"orange"}} icon={faStar}/>
                    <FontAwesomeIcon style={{color:"orange"}} icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                     <span>ay hagaa</span>
                <div>
                    <span>ممتاز</span>
                </div>

            </div>
            <div>
                <p class="card-text text-right">23 November 2020</p>

            </div><br/>

        </div>
                   
        <br />
        {/* cardbody  only one review */}

        <div class="card-body">
            <div class="col-md-3">
                        <FontAwesomeIcon style={{color:"orange"}} icon={faStar}  />
                        <FontAwesomeIcon style={{color:"orange"}} icon={faStar}/>
                        <FontAwesomeIcon style={{color:"orange"}} icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>     
                    <span>ay hagaa</span>
                <div>
                    <span>ممتاز</span>
                </div>

            </div>
            <div>
                <p class="card-text text-right">23 November 2020</p>

            </div><br/>

        </div>
        {/* cardbody  only one review */}



    </div>
    {/* all users Review  (col-12 div)*/}





 {/* // // container */}
</div>
        );
    }
}
 
export default Restaurant;



 {/* <FontAwesomeIcon icon={faStar} /> */}


                        // {
                           
                        //     ["one","two","three","four","five"].map((s)=>{
                        //        return(<FontAwesomeIcon icon={faStar}/>)
                                   

                        //     })


                        // } 