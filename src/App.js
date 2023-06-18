import React, { Component } from "react";
import Header_comp from "./components/Header_comp";
import Boxes from "./components/Boxes";
import Products from "./components/Products";
import PlayVideo from "./components/PlayVideo";

class App extends Component {
   render() {
      return (
         <>
            <Header_comp></Header_comp>
            <Boxes></Boxes>
            <Products></Products>
            <PlayVideo></PlayVideo>
            <p></p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
         </>
      );
   }
}

export default App;
