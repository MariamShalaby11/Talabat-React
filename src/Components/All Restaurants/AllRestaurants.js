import React from 'react';
import './AllRestaurants.css';
import slide1 from '../../images/slider-02.jpg';
import { FaSearch} from "react-icons/fa";
import axios from 'axios';



export default class AllRestaurants extends React.Component{
    state={
        AllRestaurants:[]

    }
    async componentDidMount(){

        await axios.get('http://localhost:58160/api/AllRestPage').then(res=>{
  
            this.setState({AllRestaurants:res.data})
  
           console.log(res.data)  
             }) 
            }      
    render(){
        return(
        <div class="container" id="div1">
            <div class="row">
                <div class="card bg-transparent" id="card1">
                    <div class="card-header" style={{height: 50}} id="TopCard">
                      <h4>All Restaurants</h4>
                    </div>
                    <div class="card-body bg-transparent">
                        <div class="form-inline my-2 my-lg-0">
                            <div class="input-group input-group" id="myDiv">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text bg-transparent" style={{borderRight:"none"}}  id="MySearchIcon">
                                            <FaSearch/>
                                            </span>   
                                    </div>                             
                                <input type="text" class="form-control" aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm" placeholder="Search Restaurant" id="MySearchBox"  style={{borderLeft:"none"}}/>                                                                                                                                      
                            </div>                          
                        </div>

                            <div class="row special-list" id="rest">
                                {this.state.AllRestaurants.map((AllRest)=>{
                                    return(
                                <div class="col-lg-4 col-md-6">
                                    <div class="gallery-single fix">
                                        <img src={slide1} class="img-fluid" alt="Image" id="RestImage"/>
                                        <div class="card-title">
                                            <h4>{AllRest.RestaurantName}</h4>
                                            <p>{AllRest.Description}</p>
                                        </div>
                                    </div>
                                </div>   
                                    )})}   
                                                                                                        
                                </div>                                                
                    </div>

           {/*  -----------------Pagination------------------------------ */}

                    <div class="card-footer text-muted" id="MyCardFooter">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination" id="MyPagination">
                              <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                  <span aria-hidden="true">&laquo;</span>
                                </a>
                              </li>
                              <li class="page-item"><a class="page-link" href="#">1</a></li>
                              <li class="page-item"><a class="page-link" href="#">2</a></li>
                              <li class="page-item"><a class="page-link" href="#">3</a></li>
                              <li class="page-item"><a class="page-link" href="#">4</a></li>
                              <li class="page-item"><a class="page-link" href="#">5</a></li>
                              <li class="page-item"><a class="page-link" href="#">6</a></li>
                              <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                  <span aria-hidden="true">&raquo;</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                    </div>
    
                  </div>
            </div>
        </div>
        )
    }
}