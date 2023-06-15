import React, { Component } from "react";
import "../styles/boxes.css";
import Box from "./Box";
import img1 from "../images/product/product-02.jpg";
import img2 from "../images/product/product-04.jpg";
import img3 from "../images/product/product-20.jpg";

class Boxes extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <>
            <div className="boxes">
               <Box image={img1}></Box>
               <Box image={img2}></Box>
               <Box image={img3}></Box>
            </div>
         </>
      );
   }
}

export default Boxes;
