import React, { Component } from "react";
import "../styles/concatUs.css";
class ConcatUs extends Component {
   state = {};
   render() {
      return (
         <>
            <div className="subscribe">
               <div className="subscribe-box">
                  <div className="d-flex">
                     <i className="fa fa-envelope "></i>
                     <h2>Subscribe Newsletter</h2>
                  </div>
                  <div>
                     <p>
                        SIGN UP OUR NEWSLETTER & RECEIVE 15% OFF YOUR FIRST
                        PURCHASE,
                     </p>
                  </div>
                  <div className="emeil-box">
                     <input type="text" placeholder="email@example.com"></input>
                     <br></br>
                     <button className="btn-subscribe">SUBSCRIBE</button>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default ConcatUs;
