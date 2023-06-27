import React, { Component } from "react";
import "../styles/navbar.css";
import logo from "../images/logo/logo-02.png";
import { Link, Routes, Route } from "react-router-dom";

class Navbar_comp extends Component {
   state = {};
   render() {
      return (
         <>
            <div className="container-fluid-nav">
               <nav>
                  <div className="logo">
                     <img src={logo}></img>
                  </div>
                  <div className="content">
                     <ul className="flex">
                        <li>
                           <Link to="/">Home</Link>
                        </li>

                        <li>
                           <Link to="/about-me">About Me</Link>
                        </li>
                        <li>
                           {" "}
                           <Link to="/product">Product</Link>
                        </li>
                        <li>Contact</li>
                        <li>Blog</li>
                     </ul>
                  </div>
                  <div className="icon">
                     <ul>
                        <li>
                           <i className="fa fa-search "></i>
                        </li>
                        <li>
                           <i className="fa 	fa-shopping-cart"></i>
                        </li>
                        <li>
                           <i className="fa fa-heart"></i>
                        </li>
                        <li>
                           <i className="fa fa-bars"></i>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </>
      );
   }
}

export default Navbar_comp;
