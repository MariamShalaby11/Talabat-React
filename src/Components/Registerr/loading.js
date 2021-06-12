import React from 'react';

import '../Registerr/load.css'

export default class Loading extends React.Component{

  constructor(props){
      super(props);
      this.state={
     
    }
  }
  render(){
      return(
        <>
          <div style={{height:'100%'}}>
            <main class="wrapper">
                    <div class="loader">
                        <img class="loader__animated" src="https://image.flaticon.com/icons/svg/561/561071.svg" alt=""/>
                        <img src="https://image.flaticon.com/icons/svg/560/560969.svg" alt=""/>
                    </div>
                Loading...
            </main>
 
           </div>
         </>
      )
  }

}


