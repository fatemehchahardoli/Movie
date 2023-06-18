import React, { Component } from "react";
import "../styles/downloadApp.css";
import img1 from "../images/laptop.png";
class DownloadApp extends Component {
   state = {};
   render() {
      return (
         <>
            <div className="display-grid">
               <div className="align-self-n">
                  <p>Download Our App</p>
                  <h2>Watch Any Where</h2>
                  <p>
                     Install Cinet app for your device and enjoy high-quality
                     movies and tv shows anywhere.
                  </p>
                  <button>
                     <span>Android app on</span>
                     <i className="fa fa-google"></i>Google
                  </button>
                  <button>
                     <span>Available on the</span>
                     <i className="fa fa-apple"></i>App Store
                  </button>
               </div>
               <div>
                  <img src={img1} alt="laptop"></img>
               </div>
            </div>
         </>
      );
   }
}

export default DownloadApp;
