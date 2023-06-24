import React, { Component } from "react";
import "../styles/product.css";
import img1 from "../images/product/product-02.jpg";
import img2 from "../images/product/product-01.jpg";

class Product extends Component {
   render() {
      const { image } = this.props;
      const { Title } = this.props;

      return (
         <>
            <div className="card-product">
               <div className="product-img">
                  <img src={image} alt="" className="img1"></img>
                  <img src={img2} alt="" className="img2 hidden"></img>
               </div>
               <div className="product-description">
                  <p className="product-title">{Title}</p>
                  <span className="product-star">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                  </span>
                  <p className="product-price">$40.00 $60.00</p>
               </div>
            </div>
         </>
      );
   }
}

export default Product;
