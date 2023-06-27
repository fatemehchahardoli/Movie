import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import AllProductPage from "./components/AllProductPage";
class App extends Component {
   render() {
      return (
         <>
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/about-me" element={<AboutMe />}></Route>
               <Route path="/product" element={<AllProductPage />}></Route>
            </Routes>
         </>
      );
   }
}

export default App;
