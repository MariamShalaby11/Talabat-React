import React from 'react';
import './AllRestaurants.css';
import slide1 from '../../images/slider-02.jpg';
import { FaSearch} from "react-icons/fa";
import axios from 'axios';



export default class AllRestaurants extends React.Component{
    state={
        AllRestaurants:[],SearchTerm:"",
        Cusine:[]

    }
    ShowCusineNameHandler=(i)=>{
        axios.get(`http://localhost:58160/api/cusine/${i}`).then(res=>{

            this.setState({Cusine:res.data})
    
            console.log(res.data); 
             
            }) 
    }
  
   // async componentDidMount(){

      //  await axios.get(`http://localhost:58160/api/AllRestPage`).then(res=>{

    // getCusines(id){
    //       axios.get(`https://localhost:44379/api/cusine/${id}`).then(res=>{
  
    //         this.setState({cusines:res.data})
  
    //        console.log(res.data);  
    //          }) ;
    // }
    async componentDidMount(){

        await axios.get(`https://localhost:44327/api/AllRestPage`).then(res=>{
  
            this.setState({AllRestaurants:res.data})
  
           console.log(res.data)  
             })


            //  this.ShowCusineNameHandler();
             {this.state.AllRestaurants.map((AllRest)=>{
                this.ShowCusineNameHandler(AllRest.RestaurantId)
             })}

            //  await axios.get(`http://localhost:58160/api/cusine/${this.state.RestId}`).then(res=>{
  
            //     this.setState({Cusine:res.data})
      
            //    console.log(res.data)  
            //     }) 
            // }     
             
            //  }) ;

            }      
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="card bg-transparent" id="card1">
                    <div className="card-header" style={{height: 50}} id="TopCard">
                      <h4>All Restaurants</h4>
                    </div>

                    <div class="col-lg-3 col-md-12" style={{ marginLeft: 5 }}>
                        <div class="form-group has-search searchBox" style={{ marginTop: 20 }}>
                            <span class="fa fa-search form-control-feedback srchIcon"><FaSearch/></span>
                            <input type="text" class="form-control formCtrl" placeholder="Search Restaurant"

                                onChange={(e) => {

                                    if (e.target.value != '') {
                                        axios.get(`http://localhost:44327/api/search/${e.target.value}`).then(
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

                                }}
                            />
                        </div>
                        </div>                   

                    <div className="card-body bg-transparent">                                              
                            <div className="row special-list" id="rest">
                                {this.state.AllRestaurants.map((AllRest)=>{
                                    console.log(AllRest.restaurantCusines);
                                    return(
                                <div className="col-lg-4 col-md-6">
                                    <div className="gallery-single fix">
                                        <img src={slide1} className="img-fluid" alt="Image" id="RestImage"/>
                                        <div className="card-title">
                                            <h4>{AllRest.RestaurantName}</h4>
                                            {this.state.Cusine.map((cusObj)=>{
                                                console.log(cusObj);
                                            return(
                                                <p>{cusObj.CuisineName}</p>
                                            )
                                        })}
                                            {AllRest.restaurantCusines.map((c)=>{
                                                console.log(c);
                                                
                                                return( <span>{c.Cuisine.CuisineName} , </span>)
                                               
                                            })}

                                            {/* <p>{this.getCusines(AllRest.RestaurantId)}</p> */}
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