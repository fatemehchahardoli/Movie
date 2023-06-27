import React, { Component } from "react";
import "../styles/footer.css";
import logo from "../images/logo/logo-02.png";
class Footer extends Component {
   state = {};
   render() {
      return (
         <>
            <footer>
               <div className="footer-logo">
                  <img src={logo} alt="logo"></img>
               </div>
               <div className="footer">
                  <div className="footer-title">
                     <h4>STORE INFORMATION</h4>
                  </div>
                  <div className="footer-title">
                     <h4>USEFUL LINKS</h4>
                  </div>
                  <div className="footer-title">
                     <h4>OUR COMPANY</h4>
                  </div>
                  <div className="footer-title">
                     <h4>NEWSLETTER</h4>
                  </div>
                  <div>
                     <ul>
                        <li>
                           <a href="javascript:void(0)">
                              <i className="fa-solid fa-location-dot"></i> 1234
                              Park Street Avenue,NY City America.
                           </a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">
                              <i className="fa fa-phone"></i> +88 014 386 969143
                              , +88 014 419 67683
                           </a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">
                              <i className="fa fa-envelope"></i>{" "}
                              info@example.com
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <ul>
                        <li>
                           <a href="javascript:void(0)"> PlayStation Studios</a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">PlayStation Games</a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">Xbox Consoles</a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">Xbox Games</a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">Xbox Accessories</a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">Cart</a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <ul>
                        <li>
                           <a href="javascript:void(0)">Support</a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">Privacy Policy</a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">Sitemap</a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">About Us</a>
                        </li>
                        <li>
                           <a href="javascript:void(0)">Legal</a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <div className="emeil-box">
                        <input
                           type="text"
                           placeholder="email@example.com"
                        ></input>

                        <button className="btn-subscribe">SUBSCRIBE</button>
                     </div>

                     <div className="social">
                        <h4>GET SOCIAL</h4>
                        <ul>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fa fa-facebook"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fa fa-twitter"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fa fa-pinterest-p"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fa fa-instagram"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fa fa-patreon"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="copy-write">
                  Copyright © All rights reserved | Made by{" "}
                  <span className="color-base">fatemeh chahardoli</span>
               </div>
            </footer>
         </>
      );
   }
}

export default Footer;
