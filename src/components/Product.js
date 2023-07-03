import React, { Component } from "react";
import "../styles/product.css";
import img1 from "../images/product/product-02.jpg";
import img2 from "../images/product/product-01.jpg";

class Product extends Component {
   render() {
      const { image, Title, Director, Year, Genre } = this.props;

      return (
         <>
            <div className="card-product">
               <div className="product-img">
                  <img src={image} alt="" className="img1"></img>
                  <img src={img2} alt="" className="img2 hidden"></img>
               </div>
               <div className="product-description">
                  <h3>{Title}</h3>
                  <p className="product-title">
                     {Director}&nbsp;&nbsp;&nbsp;
                     <span>{Year}</span>
                  </p>
                  <span className="product-star">
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                  </span>

                  <p className="product-price">{Genre}</p>
               </div>
            </div>
         </>
      );
   }
}

export default Product;
