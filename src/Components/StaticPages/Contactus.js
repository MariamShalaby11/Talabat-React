import React from 'react';
import { FaUserTie } from 'react-icons/fa';


export default class contactus extends React.Component{
    state={
    }

    render(){
        return(
            <div id="maincontainerr" className="container">
        
    
         <div class="d-flex justify-content-center bg-white" >
      
                       <div  id="cardess"  class="p-4">
                         
                          <div  style={{marginTop:100}} >
                               <h2>Contact Us</h2>
                          </div>
                          <hr></hr>
                          <div class="mt-3">
                                  <h5>How may we help you?</h5>
                                  <p>Our agents are available 2mins to make sure that all your issues and inquiries are resolved.</p>
                                  
                           </div>
                          <div class="d-flex flex-column justify-content-center">
                                <div class="d-flex ">
                                   
                                    <h3 class="mx-auto ml-5 mr-2" id="needhelp"> <FaUserTie/> Need Help? </h3> 
                                   
                                     
                                </div>
                                <div class="d-flex flex-column">
                                    <div>
                                        <h3>    Write to us</h3>
                                        <p>you can fill the below contact form and we make sure to get back to you as soon as possible.</p>
                                    </div>
                                    <div class="col-md-12">
                                        <form>
                                            <div class="form-group">
                                                <label for="name">Name</label>
                                                <input type="text" id="name" class=" form-control" required/>
                                            </div>
                                            <div  class="form-group">
                                                <label for="email">Email</label>
                                                <input type="text" id="email" class=" form-control" required/>
                                            </div>
                                            <div  class="form-group">
                                                <label for="Mob">Mobile number</label>
                                                <input type="number" id="Mob" class="form-control"/>
                                            </div>
                                            <div  class="form-group">
                                            <label for="message">Comment</label>
                                            <textarea class="form-control" id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-success btn-block" id="submit" type="submit">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                          </div>
                          
                       </div>
                </div>
                </div>
        )
    }
}
