import React, { Component } from "react";
import Navbar_comp from "./Navbar_comp";
import Footer from "./Footer";
import Products from "./Products";

class AllProductPage extends Component {
   render() {
      return (
         <>
            <Navbar_comp></Navbar_comp>
            <Products></Products>
            <Footer></Footer>
         </>
      );
   }
}

export default AllProductPage;
