import React, { Component } from "react";
import Navbar_comp from "./Navbar_comp";
import "../styles/header.css";
class Header_comp extends Component {
   render() {
      return (
         <>
            <header>
               <div className="container-fluid">
                  <Navbar_comp></Navbar_comp>
               </div>
            </header>
         </>
      );
   }
}

export default Header_comp;
