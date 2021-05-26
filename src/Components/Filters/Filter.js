import React from 'react'
import './Filter.css'
import im from '../../images/avatar.jpg'
import axios from 'axios'

class Filters extends React.Component {

    state = {
        Restaurant: [],SelectedTab: "tab1"
    }
    

    componentDidMount() {
        this.setState({SelectedTab:this.state.SelectedTab})
        this.firstcall()
    }

    firstcall() {
        axios.get(`http://localhost:58160/api/values/${this.state.SelectedTab}`).then(

            (res) => {
                this.state.Restaurant = res.data
                this.setState({
                    Restaurant: this.state.Restaurant
                })
            }
        )
        return this.state.Restaurant
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
            <div class="container shadow p-3 mb-5 bg-white rounded" style={{ marginTop: 20 }}>
                <h3>Restaurant in Cairo</h3>
                <div class="row">
                    <div class="col-lg-3 col-md-12" >
                        <div class="form-group has-search" style={{ marginTop: 10 }}>
                            <span class="fa fa-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Search Menue Item"

                                onChange={(e) => {

                                    if (e.target.value != '') {
                                        axios.get(`http://localhost:58160/api/values?character=${e.target.value}`).then(
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
                            <h5>Filter By</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Online Payment Available
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Desserts
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Deals & Offers
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Use Voucher Here
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                El Market
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Health & Beauty
                                </label>
                            </div>

                        </div>



                        <div class="card shadow-sm p-3 mb-2 bg-white rounded">

                            <h5>Category</h5>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Fees Delivery
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Speed
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Date
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Money
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Quality
                                </label>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-9 col-md-12">
                        <div class="topnav">
                            <a class=" h4 col-lg-2 col-md-3 active element" onClick={(e)=>this.TabClick(e,"tab1")} > Recommends</a>
                            <a class=" h4 col-lg-2 col-md-3 element" onClick={(e)=>this.TabClick(e,"tab2")} >A To Z</a>
                            <a class=" h4 col-lg-2 col-md-3 element" >Newest</a>
                            <a class=" h4 col-lg-2 col-md-3 element" >Rates</a>
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