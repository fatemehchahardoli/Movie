import React, { Component } from "react";
import "../styles/playVideo.css";
import Box from "./Box";
import img1 from "../images/product/product-02.jpg";
import img2 from "../images/product/product-04.jpg";
import img3 from "../images/product/product-20.jpg";
class PlayVideo extends Component {
   state = {};
   render() {
      return (
         <>
            <div className="play-Video">
               <div className="detail-video">
                  <h2 className="detail-text">All the President's Men</h2>
                  <div className="info">
                     <p className="font-size-1">
                        Language:{" "}
                        <span className="ln font-size-2 color-1">
                           English,Hindi
                        </span>
                     </p>
                     <p className="font-size-1">
                        Genre:{" "}
                        <span className="font-size-2 color-1">
                           Action,Drama
                        </span>
                     </p>
                     <div className="views">
                        {" "}
                        <a class="views" href="#">
                           <i class="fa fa-eye"></i> 5M Views
                        </a>
                        <a class="rating" href="#">
                           <i class="fa fa-star"></i> 8.3/10
                        </a>
                     </div>
                     <div class="views m-1">
                        <span class="year m-2">1976</span>
                        <a class="time" href="#">
                           <i class="far fa-clock me-2"></i>2hr : 42mins
                        </a>
                        <span class="quality m-2">
                           Quality: <a href="#">720P, HD, 4K</a>
                        </span>
                     </div>
                     <div class="d-flex">
                        <a class="btn btn-link m-2" href="#">
                           <i class="fa fa-play"></i> Play Now
                        </a>
                        <a href="javascript:void(0)" class=" m-2">
                           <i class="fa fa-plus"></i>
                           Add to List
                        </a>
                        <div class="share-box m-2">
                           <a href="#">
                              {" "}
                              <i class="fa fa-share-alt"></i> Share
                           </a>
                           {/* <ul class="list-unstyled share-box-social">
                              <li>
                                 {" "}
                                 <a href="#">
                                    <i class="fa fa-facebook-f"></i>
                                 </a>{" "}
                              </li>
                              <li>
                                 {" "}
                                 <a href="#">
                                    <i class="fa fa-twitter"></i>
                                 </a>{" "}
                              </li>
                              <li>
                                 {" "}
                                 <a href="#">
                                    <i class="fa fa-linkedin"></i>
                                 </a>{" "}
                              </li>
                              <li>
                                 {" "}
                                 <a href="#">
                                    <i class="fa fa-instagram"></i>
                                 </a>{" "}
                              </li>
                           </ul> */}
                        </div>{" "}
                     </div>{" "}
                     <p>
                        An American grandson of the infamous scientist,
                        struggling to prove that his grandfather was not as
                        insane as people believe, is invited to Transylvania,
                        where he discovers the process that reanimates a dead
                        body.
                     </p>
                  </div>
               </div>
               <div class="video mb-4 mb-sm-0">
                  <a
                     class="video-btn btn-animation popup-youtube"
                     href="https://www.youtube.com/watch?v=n_Cn8eFo7u8"
                  >
                     <i class="fa fa-play"></i>
                  </a>
               </div>
               <div className="flex-box ">
                  <Box image={img1}></Box>
                  <Box image={img2}></Box>
                  <Box image={img3}></Box>
               </div>
            </div>
         </>
      );
   }
}

export default PlayVideo;
