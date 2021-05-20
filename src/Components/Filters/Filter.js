import React from 'react'
import './Filter.css'
import im from '../../images/avatar.jpg'

class Filters extends React.Component {

    state = {

    }

    render() {
        return (
            <div class="container shadow p-3 mb-5 bg-white rounded" style={{ marginTop: 20 }}>
                <h3>Restaurant in Cairo</h3>
                <div class="row">


                    <div class="col-lg-3 col-md-12" >

                        <div class="form-group has-search" style={{ marginTop: 10 }}>
                            <span class="fa fa-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Search Menue Item" />
                        </div>


                        <div class="card shadow-sm p-3 mb-2 bg-white rounded">

                            <h5>Filter By</h5>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fees Delivery
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Phase
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Date
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Money
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Quality
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
                            <a class=" h4 col-lg-2 col-md-3 active element" > Recommends</a>
                            <a class=" h4 col-lg-2 col-md-3 element" >Rates</a>
                            <a class=" h4 col-lg-2 col-md-3 element" >Newest</a>
                            <a class=" h4 col-lg-2 col-md-3 element" >A To Z</a>

                        </div>

                        <div class="container card">

                            <div style={{ padding: 10 }}>
                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-sm-5">
                                        <img class="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src={im} />
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-sm-7" style={{ marginBottom: 10 }}>
                                        <span class="h5">Fresh Juice</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>Charity</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>Very Good</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>With 21 Min Service 4.00 Mix 15.00</span>
                                    </div>


                                </div>

                                <hr />


                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-sm-5">
                                        <img class="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src={im} />
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-sm-7" style={{ marginBottom: 10 }}>
                                        <span class="h5">Fresh Juice</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>Charity</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>Very Good</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>With 21 Min Service 4.00 Mix 15.00</span>
                                    </div>


                                </div>

                                <hr />
                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-sm-5">
                                        <img class="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src={im} />
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-sm-7" style={{ marginBottom: 10 }}>
                                        <span class="h5">Fresh Juice</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>Charity</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>Very Good</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>With 21 Min Service 4.00 Mix 15.00</span>
                                    </div>


                                </div>

                                <hr />

                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-sm-5">
                                        <img class="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src={im} />
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-sm-7" style={{ marginBottom: 10 }}>
                                        <span class="h5">Fresh Juice</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>Charity</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>Very Good</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>With 21 Min Service 4.00 Mix 15.00</span>
                                    </div>


                                </div>

                                <hr />
                                

                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-sm-5">
                                        <img class="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src={im} />
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-sm-7" style={{ marginBottom: 10 }}>
                                        <span class="h5">Fresh Juice</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>Charity</span><br />

                                        <span class="h6" style={{ color: '#aaa' }}>Very Good</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>With 21 Min Service 4.00 Mix 15.00</span>
                                    </div>


                                </div>

                                <hr />
                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-sm-5">
                                        <img class="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src={im} />
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-sm-7" style={{ marginBottom: 10 }}>
                                        <span class="h5">Fresh Juice</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>Charity</span><br />

                                        <span class="h6" style={{ color: '#aaa' }}>Very Good</span><br />
                                        <span class="h6" style={{ color: '#aaa' }}>With 21 Min Service 4.00 Mix 15.00</span>
                                    </div>
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