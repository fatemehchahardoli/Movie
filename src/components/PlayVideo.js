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
                        <a className="views" href="javascript:void(0)">
                           <i className="fa fa-eye"></i> 5M Views
                        </a>
                        <a className="rating" href="javascript:void(0)">
                           <i className="fa fa-star"></i> 8.3/10
                        </a>
                     </div>
                     <div className="views m-1">
                        <span className="year m-2">1976</span>
                        <a className="time" href="javascript:void(0)">
                           <i className="far fa-clock me-2"></i>2hr : 42mins
                        </a>
                        <span className="quality m-2">
                           Quality:{" "}
                           <a href="javascript:void(0)">720P, HD, 4K</a>
                        </span>
                     </div>
                     <div className="d-flex">
                        <a
                           className="btn btn-link m-2"
                           href="javascript:void(0)"
                        >
                           <i className="fa fa-play"></i> Play Now
                        </a>
                        <a href="javascript:void(0)" className=" m-2">
                           <i className="fa fa-plus"></i>
                           Add to List
                        </a>
                        <div className="share-box m-2">
                           <a href="javascript:void(0)">
                              {" "}
                              <i className="fa fa-share-alt"></i> Share
                           </a>
                           {/* <ul className="list-unstyled share-box-social">
                              <li>
                                 {" "}
                                 <a href="javascript:void(0)">
                                    <i className="fa fa-facebook-f"></i>
                                 </a>{" "}
                              </li>
                              <li>
                                 {" "}
                                 <a href="javascript:void(0)">
                                    <i className="fa fa-twitter"></i>
                                 </a>{" "}
                              </li>
                              <li>
                                 {" "}
                                 <a href="javascript:void(0)">
                                    <i className="fa fa-linkedin"></i>
                                 </a>{" "}
                              </li>
                              <li>
                                 {" "}
                                 <a href="javascript:void(0)">
                                    <i className="fa fa-instagram"></i>
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
               <div className="video mb-4 mb-sm-0">
                  <a
                     href="https://www.youtube.com/watch?v=n_Cn8eFo7u8"
                     className="video-btn btn-animation popup-youtube"
                  >
                     <i className="fa fa-play"></i>
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
