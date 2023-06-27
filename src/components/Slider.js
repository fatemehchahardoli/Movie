// import React, { Component } from "react";
// import "../styles/slider.css";
// import img1 from "../images/slider/slide-03.jpg";
// import img2 from "../images/slider/slide-02.jpg";
// import img3 from "../images/slider/slide-01.jpg";

// class Slider extends Component {
//    constructor() {
//       super();
//       this.state = {
//          currentSlide: 0,
//       };
//    }

//    displayNone = () => {
//       const slides = document.querySelectorAll(".slide");
//       for (let i = 0; i < slides.length; i++) {
//          slides[i].style.display = "none";
//       }
//    };
//    noActive = () => {
//       const slides = document.querySelectorAll(".slide");
//       for (let i = 0; i < slides.length; i++) {
//          slides[i].classList.remove("active");
//       }
//    };
//    nextSlide = () => {
//       let slides = document.querySelectorAll(".slide");
//       const { currentSlide } = this.state;
//       this.displayNone();
//       this.noActive();
//       this.setState({
//          currentSlide: currentSlide === 2 ? 0 : currentSlide + 1,
//       });

//       slides[currentSlide].style.display = "block";
//       slides[currentSlide].classList.add("active");
//    };
//    prevSlide = () => {
//       let slides = document.querySelectorAll(".slide");
//       const { currentSlide } = this.state;
//       this.displayNone();
//       this.noActive();
//       this.setState({
//          currentSlide: currentSlide === 0 ? 2 : currentSlide - 1,
//       });

//       slides[currentSlide].style.display = "block";
//       slides[currentSlide].classList.add("active");
//    };
//    // componentDidMount() {
//    //    setInterval(() => {
//    //       this.nextSlide();
//    //    }, 2000);
//    // }

//    render() {
//       return (
//          <>
//             <div className="slider">
//                <div className="slide active">
//                   <img src={img1}></img>
//                </div>
//                <div className="slide">
//                   <img src={img2}></img>
//                </div>
//                <div className="slide">
//                   <img src={img3}></img>
//                </div>

//                <button className="prev" onClick={this.prevSlide}>
//                   &lt;
//                </button>
//                <button className="next" onClick={this.nextSlide}>
//                   &gt;
//                </button>
//             </div>
//          </>
//       );
//    }
// }

// export default Slider;
