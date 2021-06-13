import React from 'react';
import './Offers.css';
import slide1 from '../../images/slider-02.jpg';
import slide2 from '../../images/slider-03.jpg';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

export default class Offers extends React.Component{
    state={
        RestaurantsWithOffers:[],
        MealsOffer:[],
        setShow:false
    }

    handleShow=()=>{
      this.setState({setShow:true});
    }
    handleClose=()=>{
      this.setState({setShow:false});
    }

    GetMealsOffersHandler=(id)=>{
      this.handleShow();
      
       axios.get(`https://localhost:44327/api/MealOffers/${id}`).then(res=>{
  
        this.setState({MealsOffer:res.data})

       console.log(res.data)  
       
         }) 
    }

    async componentDidMount(){

        await axios.get('https://localhost:44327/api/RestOffers').then(res=>{
  
            this.setState({RestaurantsWithOffers:res.data})
  
           console.log(res.data)  
             }) 
            }
            
    render(){
        return(
            //   -------------------------------------------------- Offers --------------------------------------
            <div className="container">
            <div className="row">
                <div className="card bg-transparent" id="Mycard1">
                    <div className="card-header" style={{height: 50}} id="TopCardd">
                      <h4>Offers</h4>
                    </div>
                    <div className="card-body bg-transparent" >

                            <div className="row special-list" style={{cursor:'pointer'}}>
                                {this.state.RestaurantsWithOffers.map((Offers)=>{
                                    return(
                                <div className="col-lg-4 col-md-6" onClick={()=>this.GetMealsOffersHandler(Offers.RestaurantId)}>
                                    <div className="gallery-single fix">
                                        <img src={slide1} className="img-fluid" alt="Image" id="RestImage" />
                                        <div className="card-title">
                                            <h4>{Offers.RestaurantName}</h4>
                                        </div>
                                    </div>
                                </div>   
                                    )})}   
                                                                                                        
                                </div>                                                
                    </div>
                    {/* -----------------------Modal---------------------------------------------- */}

                    <Modal show={this.state.setShow}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                     >
                      <Modal.Header>

                        <h5 style={{color:'#810000'}}>Offers from{this.state.RestaurantsWithOffers.RestaurantName}</h5>
                        
                        <button className="close" onClick={this.handleClose} aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                      </Modal.Header>
                      <Modal.Body style={{cursor:'pointer'}}>

                        {this.state.MealsOffer.map((meals)=>{
                      <div className="card mb-3">
                      <div className="row">
                        <div className="col-md-4">
                        <img src={slide1} className="img-fluid" alt="Image" id="MyRestImage"/>
                      </div>
                        <div className="col-md-8">
                          <div className="card-body bg-transparent">
                            <h5 className="card-title">{meals.Mealname}</h5>
                            <p className="card-text">{meals.MealDescription}</p>
                            <p className="card-text text-right"><small style={{color:'#810000'}}>{meals.MealPrice}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                        })}


                      <div className="card mb-3">
                        <div className="row">
                          <div className="col-md-4">
                          <img src={slide2} className="img-fluid" alt="Image" id="RestImage"/>
                        </div>
                          <div className="col-md-8">
                            <div className="card-body bg-transparent">
                              <h5 className="card-title">Meal Offer</h5>
                              <p className="card-text">2 double cheese burger sandwiches served with 2 french fries and 2 coca-cola cans with 100 egp instead of 122</p>
                              <p className="card-text text-right"><small style={{color:'#810000'}}>100 EGP</small></p>
                            </div>
                          </div>
                        </div>
                      </div>                      

                      </Modal.Body>
                      <Modal.Footer style={{border:'none'}}></Modal.Footer>
                    </Modal>
                    
           {/*  -----------------Pagination------------------------------ */}

                    <div className="card-footer text-muted"  style={{background:'transparent'}}>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination" id="MyPagination" style={{marginLeft:'35%'}}>
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