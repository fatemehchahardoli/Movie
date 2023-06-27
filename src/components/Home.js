import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header_comp from "./Header_comp";
import Boxes from "./Boxes";
import Products from "./Products";
import PlayVideo from "./PlayVideo";
import DownloadApp from "./DownloadApp";
import ConcatUs from "./ConcatUs";
import Footer from "./Footer";

class Home extends Component {
   state = {};
   render() {
      return (
         <>
            <Header_comp></Header_comp>
            <Boxes></Boxes>
            <Products></Products>
            <PlayVideo></PlayVideo>
            <DownloadApp></DownloadApp>
            <ConcatUs></ConcatUs>
            <Footer></Footer>
         </>
      );
   }
}

export default Home;
