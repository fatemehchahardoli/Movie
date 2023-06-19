import React, { Component } from "react";
import Header_comp from "./components/Header_comp";
import Boxes from "./components/Boxes";
import Products from "./components/Products";
import PlayVideo from "./components/PlayVideo";
import DownloadApp from "./components/DownloadApp";
import ConcatUs from "./components/ConcatUs";

class App extends Component {
   render() {
      return (
         <>
            <Header_comp></Header_comp>
            <Boxes></Boxes>
            <Products></Products>
            <PlayVideo></PlayVideo>
            <DownloadApp></DownloadApp>
            <ConcatUs></ConcatUs>
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
