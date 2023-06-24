import React, { Component } from "react";
import "../styles/slider.css";
import img1 from "../images/slider/slide-03.jpg";
import img2 from "../images/slider/slide-02.jpg";
import img3 from "../images/slider/slide-01.jpg";
import img4 from "../images/baner/b-2.jpg";
class Slider extends Component {
   constructor() {
      super();
      this.state = {
         currentSlide: 0,
      };
   }

   displayNone = () => {
      for (let i = 0; i < this.slides.length; i++) {
         this.slides[i].style.display = "none";
      }
   };
   noActive = () => {
      for (let i = 0; i < this.slides.length; i++) {
         this.slides[i].classList.remove("active");
      }
   };
   nextSlide = () => {
      let slides = document.querySelectorAll(".slide");
      const { currentSlide } = this.state;
      this.displayNone();
      this.noActive();
      this.setState({
         currentSlide: currentSlide === 2 ? 0 : currentSlide + 1,
      });
      slides[1].style.display = "block";
      slides[1].classList.add("active");
      console.log(this.state);
   };
   render() {
      const currentSlide = this.state;

      return (
         <>
            <div className="slider">
               <div className="slide active">
                  <img src={img1}></img>
               </div>
               <div className="slide">
                  <img src={img2}></img>
               </div>
               <div className="slide">
                  <img src={img3}></img>
               </div>
               {/* <div >
                  <img src={img4}className={currentSlide === 3 ? "active" : ""}></img>
               </div> */}
               <button className="prev">&lt;</button>
               <button className="next" onClick={this.nextSlide}>
                  &gt;
               </button>
            </div>
         </>
      );
   }
}

export default Slider;
