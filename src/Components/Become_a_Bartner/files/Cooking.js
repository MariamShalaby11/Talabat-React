import React, { Component } from 'react'; 
import cooking from '../style/cooking.css'

export default class Cooking extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="cookingbody">
            <h1 id="cooks">Cooking in progress..</h1>
<div id="cooking">
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div id="area">
    <div id="sides">
      <div id="pan"></div>
      <div id="handle"></div>
    </div>
    <div id="pancake">
      <div id="pastry"></div>
    </div>
  </div>
</div>
 </div>
        )
    }
}