import React from 'react';
import './HeaderStyle.css';
import FoodAway from '../images/FoodAway (4).png';
import {Link} from 'react-router-dom';
import {  FaShoppingCart, FaSignOutAlt, FaUser} from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Login from './Login/Login';


export default class Header extends React.Component{

    state={
        setShow:false,showMyAccount:"none",ShowLogin:"block"
    }

    handleShow=()=>{
        this.setState({setShow:true});
      }
      handleClose=()=>{
        this.setState({setShow:false});
    }
    async componentDidMount(){
        const tokenStr = localStorage.getItem('access_token')
        if(tokenStr==null){
          this.setState({
            showMyAccount:"none",
              ShowLogin:"block"
          })
        }else{
            this.setState({
                showMyAccount:"block",
                ShowLogin:"none"

            })
        }

    }

    render(){
        return(
            <>
            <nav class="navbar navbar-expand-lg navbar-light fix"  id="Mynav">
			<div class="container">
				
                <Link class="navbar-brand" to="/MariamShalaby11/Talabat-React/" > <img src={FoodAway} style={{width:250, height:50,marginBottom:10}}/></Link>	
                   
				
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbars-rs-food" style={{textAlign:'center'}}>
					<ul class="navbar-nav ml-auto" id="items">

					   <li class="nav-item">
                            <Link class="nav-link" to="/MariamShalaby11/Talabat-React/Offers" id="Navlinks">Offers</Link>
                       </li>

                       <li class="nav-item">
                            <Link class="nav-link" to="/MariamShalaby11/Talabat-React/BecomePartner"id="Navlinks" >Become a partner</Link>
                       </li>

						<li class="nav-item">
                            <Link class="nav-link" to="/MariamShalaby11/Talabat-React/AllResturants"id="Navlinks" >All Resturants</Link>
                       </li>

                       <li style={{display:this.state.showMyAccount}}>
                           
                           
                       <Dropdown>
                            <Dropdown.Toggle  style={{backgroundColor:"#810000",border:"none",marginTop:2}} variant="danger" id="dropdown-basic">
                                My Account
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item ><Link class="nav-link" to="/MariamShalaby11/Talabat-React/Accountinfo"id="Navlinks" style={{color:"black"}}><FaUser style={{color:"#810000"}}/> &nbsp; Account Info</Link></Dropdown.Item>
                                <Dropdown.Item ><Link class="nav-link" to="/MariamShalaby11/Talabat-React/Accountinfo"id="Navlinks" style={{color:"black"}}> <FaShoppingCart style={{color:"#810000"}}/> &nbsp; My Orders</Link> </Dropdown.Item>
                                <Dropdown.Item onClick={()=>{
                                    localStorage.removeItem('access_token')
                                    localStorage.removeItem('Customer')
                                    window.location.reload(false);
                                    this.props.history.push('MariamShalaby11/Talabat-React/Home')
                                }}><FaSignOutAlt style={{color:"#810000"}} /> &nbsp; Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                       </Dropdown>
                       </li>

                       <li class="nav-item" style={{display:this.state.ShowLogin}}>
                            <button class="btn btn-default" id="Navlinks" onClick={this.handleShow} id="LoginBtn">Login</button>
                       </li>

					</ul>
				</div>
			</div>
		</nav>

        {/* -------------------Login Modal----------------------------- */}
        <Modal 
                show={this.state.setShow}
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                        <Modal.Body>
                        <button className="close" onClick={this.handleClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                            <Login />
                        </Modal.Body>   
                      
        </Modal>
        </>
        )
    }
}