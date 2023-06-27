import React, { Component } from "react";
import "../styles/aboutMe.css";
import Navbar_comp from "./Navbar_comp";
import Footer from "./Footer";

class AboutMe extends Component {
   state = {};
   render() {
      return (
         <>
            <Navbar_comp></Navbar_comp>

            <div className="about_me">
               <div className="about-bg">
                  <div className="about-img"></div>
               </div>
               <div className="about-text">
                  <h3>About Me</h3>
                  <p>
                     {" "}
                     Duis aute irure dolor in reprehenderit in voluptate velit
                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                     occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum. Image from{" "}
                  </p>
                  <button className="contact">contact</button>
               </div>
            </div>

            <Footer></Footer>
         </>
      );
   }
}

export default AboutMe;
