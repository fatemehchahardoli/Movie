import React, { Component } from "react";
import "../styles/products.css";
import Product from "./Product";
import img1 from "../images/product/product-14.jpg";
import img2 from "../images/product/product-18.jpg";
import img3 from "../images/product/product-24.jpg";
import img4 from "../images/product/product-22.jpg";
import axios from "axios";
class products extends Component {
   constructor(props) {
      super(props);
      this.state = {
         movies: [],
      };
   }

   componentDidMount() {
      this.gatData();
      console.log(this.state);
   }
   gatData = () => {
      axios
         .get("/movies.json")
         .then((Response) => this.setState({ movies: Response.data }));
   };
   render() {
      const { movies } = this.state;
      return (
         <>
            <main>
               <section className="title">
                  <span>biggest series</span>
                  <h3 className="text">blockbuster games out now</h3>
               </section>
               <section className="filter-product ">
                  <div className="container flex">
                     <div className="filter-left flex ">
                        <button>Recommended</button>
                        <button>Top Rated</button>
                        <button>New Arrival</button>
                        <button>Trending</button>
                     </div>
                     <div className="filter-right flex">
                        <div className="filter flex">
                           <i className="fa fa-filter"> </i>
                           <span className="lable">Filter</span>
                        </div>
                        <div className="search flex">
                           <i className="fa fa-search"></i>

                           <span className="lable">Search</span>
                        </div>
                     </div>
                  </div>
               </section>
               <section className="grid">
                  {movies.map((m) => {
                     console.log(m.Title);
                     return <Product image={m.Poster} Title={m.Title} />;
                  })}

                  {/* <Product image={img2}></Product>
                  <Product image={img3}></Product>
                  <Product image={img4}></Product>
                  <Product image={img1}></Product>
                  <Product image={img2}></Product> */}
               </section>
               <button className="more">load more</button>
            </main>
         </>
      );
   }
}

export default products;
