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
                     My name is Fatemeh Chahardoli, I have a bachelor's degree
                     in software engineering from Malayer College, I am
                     interested in learning front-end and working in this field,
                     and I am currently learning front-end from Dresman Engineer
                     Abbas's website. .Hoping that day
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
