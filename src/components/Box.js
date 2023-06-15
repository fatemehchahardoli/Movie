import React, { Component } from "react";
import "../styles/boxes.css";
class Box extends Component {
   state = {};
   render() {
      const { image } = this.props;
      return (
         <>
            <div className="box">
               <img src={image}></img>
            </div>
         </>
      );
   }
}

export default Box;
