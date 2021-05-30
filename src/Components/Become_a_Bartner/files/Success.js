import React, { Component } from 'react'; 
import success from '../style/success.css'

export default class Success extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
              <div class="dummy-positioning d-flex">
                <div class="success-icon">
                  <div class="success-icon__tip"></div>
                  <div class="success-icon__long"></div>
                </div>
              </div>
              <div class="d-inline" id="done">
                done
              </div>
              <div id="contact">
              We will contact you after reviewing your data
              </div>
           </>
        )
    }
}