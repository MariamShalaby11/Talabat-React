import React from 'react'
import './Filter.css'
import im from '../../images/avatar.jpg'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'

class Filters extends React.Component {

    state = {
        Restaurant: [],SelectedTab: "tab1",Cusin:[]
    }
    

    componentDidMount() {
        this.setState({SelectedTab:this.state.SelectedTab})
        this.firstcall()
        this.secondcall()
    }

    firstcall() {
        axios.get(`https://localhost:44327/api/values/${this.state.SelectedTab}?city=${this.props.location.selectedCity}`).then(

            (res) => {
                this.state.Restaurant = res.data
                this.setState({
                    Restaurant: this.state.Restaurant
                })
            }
        )

        return this.state.Restaurant
    }

    secondcall(){
        axios.get(`https://localhost:44327/api/values/GetAllCusins`).then(

            (res) => {
                this.state.Cusin = res.data
                this.setState({
                    Cusin: this.state.Cusin
                })
            }
        )
        return this.state.Restaurant
    }

    cusinCall(e){

        axios.get(`https://localhost:44327/api/values/Cusins?filter=${e.target.value}&city=${this.props.location.selectedCity}`).then(

            (res) => {
                this.state.Restaurant = res.data
                this.setState({
                    
                    Restaurant: this.state.Restaurant
                })
            }
        )
    }

    

   TabClick = (e,tab) => {
       
        let tablinks = document.getElementsByClassName("element");
         for (var i = 0; i < tablinks.length; i++) {
             tablinks[i].className = tablinks[i].className.replace(" active", "");
         }
         e.currentTarget.className += " active";
         this.state.SelectedTab = tab
         this.setState({
             SelectedTab:this.state.SelectedTab

         })
         this.firstcall();
     }
  




    render() {
        return (
            <div class="container shadow p-3 mb-5 bg-white rounded" >
                <h3 style={{marginTop:110}}>Restaurant in <span>{this.props.location.selectedCity}</span></h3>
                <div class="row">
                    <div class="col-lg-3 col-md-12" >
                        <div class="form-group has-search" style={{ marginTop: 20 }}>
                            <span class="fa fa-search form-control-feedback">
                                <FaSearch/>
                            </span>
                            <input type="text" class="form-control controle1" placeholder="Search Menu Item"

                                onChange={(e) => {

                                    if (e.target.value != '') {
                                        axios.get(`https://localhost:44327/api/values?character=${e.target.value}&city=${this.props.location.selectedCity}`).then(
                                            (res) => {
                                                this.state.Restaurant = res.data
                                                this.setState({
                                                    Restaurant: this.state.Restaurant
                                                })
                                            }
                                        )
                                    } else {
                                        this.firstcall()

                                    }

                                }}
                            />
                        </div>
                        



                        <div class="card shadow-sm p-3 mb-2 bg-white rounded">

                            <h5>Cusine</h5>

                            {

                          this.state.Cusin.map((cus,i)=>{


                            return(

                                <div class="form-check">
                                <input class="form-check-input" value={cus.CuisineName} type="radio" name="flexRadioDefault" id={cus.CuisineName}
                                onClick={
                                    (e)=>{
                                       this.cusinCall(e); 
                                    }
                                }
                                />
                                <label class="form-check-label" for={cus.CuisineName}>
                                    {cus.CuisineName}
                                </label>
                            </div>



                            )
                          })  
                            

                            }
                               
                        </div>
                    </div>


                    <div class="col-lg-9 col-md-12">
                        <div class="topnavs">
                            <a class=" h4 col-lg-2 col-md-3 active element" onClick={(e)=>this.TabClick(e,"tab1")} > Recommends</a>
                            <a class=" h4 col-lg-2 col-md-3 element" onClick={(e)=>this.TabClick(e,"tab2")} >A To Z</a>
                            <a class=" h4 col-lg-2 col-md-3 element" onClick={(e)=>this.TabClick(e,"tab4")} >Rates</a>
                        </div>
                        <div class="container card">

                            <div style={{ padding: 10 }}>

                               <div> 
                                    {
                                        this.state.Restaurant.map((res, i) => {
                                            return (
                                                <>
                                                    <div class="row">
                                                        <div class="col-lg-2 col-md-3 col-sm-5">
                                                            <img class="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src={im} />
                                                        </div>
                                                        <div class="col-lg-10 col-md-9 col-sm-7" style={{ marginBottom: 10 }}>
                                                            <span class="h5">{res.RestaurantName}</span><br />
                                                            <span class="h6" style={{ color: '#aaa' }}>Charity</span><br />
                                                            <span class="h6" style={{ color: '#aaa' }}>Very Good</span><br />
                                                            <span class="h6" style={{ color: '#aaa' }}>With {res.MaxDeliveryTime} Min Service 4.00 Mix 15.00</span>
                                                        </div>
                                                    </div>

                                                    <hr />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Filters;