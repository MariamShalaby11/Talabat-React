import React from 'react';
import './AllRestaurants.css';
import slide1 from '../../images/slider-02.jpg';
import { FaSearch} from "react-icons/fa";
import axios from 'axios';



export default class AllRestaurants extends React.Component{
    state={
        AllRestaurants:[],SearchTerm:"",RestId:1,
        Cusine:[]

    }
  
    async componentDidMount(){

        await axios.get(`http://localhost:58160/api/AllRestPage`).then(res=>{
  
            this.setState({AllRestaurants:res.data})
  
           console.log(res.data)  
             }) 

             await axios.get(`http://localhost:58160/api/cusine/${this.state.RestId}`).then(res=>{
  
                this.setState({Cusine:res.data})
      
               console.log(res.data)  
                }) 
            }     
             
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="card bg-transparent" id="card1">
                    <div className="card-header" style={{height: 50}} id="TopCard">
                      <h4>All Restaurants</h4>
                    </div>
                    <div className="card-body bg-transparent">
                        <div className="form-inline my-2 my-lg-0">
                            <div className="input-group input-group" id="myDiv">
                                    <div className="input-group-prepend ">
                                        <span className="input-group-text bg-transparent" style={{borderRight:"none"}}  id="MySearchIcon">
                                            <FaSearch/>
                                            </span>   
                                    </div>                             
                                <input type="text" class="form-control" aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm" placeholder="Search Restaurant"   onChange={(e) => {

                                        if (e.target.value != '') {
                                            axios.get(`http://localhost:58160/api/search/${e.target.value}`).then(
                                                (res) => {
                                                    this.state.AllRestaurants = res.data
                                                    this.setState({
                                                        AllRestaurants: this.state.AllRestaurants
                                                    })
                                                }
                                            )
                                        }
                                        else{
                                            this.componentDidMount()
                                        } 
    
                                    }}id="MySearchBox"  style={{borderLeft:"none"}}/>                                                                                                                                      
                            </div>                          
                        </div>

                            <div className="row special-list" id="rest">
                                {this.state.AllRestaurants.map((AllRest)=>{
                                    return(
                                <div className="col-lg-4 col-md-6">
                                    <div className="gallery-single fix">
                                        <img src={slide1} className="img-fluid" alt="Image" id="RestImage"/>
                                        <div className="card-title">
                                            <h4>{AllRest.RestaurantName}</h4>

                                            {this.state.Cusine.map((CusineName)=>{
                                                return(
                                                    <p>{CusineName.Cusine}</p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>   
                                    )})}   
                                                                                                        
                                </div>       

                    </div>

           {/*  -----------------Pagination------------------------------ */}

                    <div className="card-footer text-muted" id="MyCardFooter">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination" id="MyPagination">
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous" style={{color:'#810000'}}>
                                  <span aria-hidden="true">&laquo;</span>
                                </a>
                              </li>
                              <li className="page-item"><a className="page-link" href="#" style={{color:'#810000'}}>1</a></li>
                              <li className="page-item"><a className="page-link" href="#" style={{color:'#810000'}}>2</a></li>
                              <li className="page-item"><a className="page-link" href="#" style={{color:'#810000'}}>3</a></li>
                              <li className="page-item"><a className="page-link" href="#" style={{color:'#810000'}}>4</a></li>
                              <li className="page-item"><a className="page-link" href="#" style={{color:'#810000'}}>5</a></li>
                              <li className="page-item"><a className="page-link" href="#" style={{color:'#810000'}}>6</a></li>
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next" style={{color:'#810000'}}>
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