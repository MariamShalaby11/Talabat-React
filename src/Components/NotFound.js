import React from 'react';
import './NotFound.css';
import{Link} from 'react-router-dom';


export default class NotFound extends React.Component{
    state={}

    render() {
        return (
            <>
            <div className="container">
                <div className="d-lg-block" id="UperDiv"> </div>
                <hr/>
                <div className="row justify-content-center">
                    <div>
                        <h6 style={{textAlign:'center'}}>Sorry, the page that you are looking for doesn't exist.</h6>
                        <h6>Please make sure that you typed the correct URL page Link, and then try again.</h6>
    
                        <div className="row justify-content-center mt-5">
                        <Link class="btn btn-circle btn-outline-new-white" to={{pathname:"/MariamShalaby11/Talabat-React/Home"}}>Go To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
               </>
             
        );
    }
}

// const NotFound = () => {
//     return ( 
//             <>
//         <div className="container">
//             <div className="d-lg-block" id="UperDiv"> </div>
//             <hr/>
//             <div className="row justify-content-center">
//                 <div>
//                     <h6 style={{textAlign:'center'}}>Sorry, the page that you are looking for doesn't exist.</h6>
//                     <h6>Please make sure that you typed the correct URL page Link, and then try again.</h6>

//                     <div className="row justify-content-center mt-5">
//                     <Link class="btn btn-circle btn-outline-new-white" to={{pathname:"/MariamShalaby11/Talabat-React/Home"}}>Go To Home</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//            </>
//      );
// }
 
// export default NotFound;
