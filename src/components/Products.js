import React, { Component } from "react";
import "../styles/products.css";
class products extends Component {
   state = {};
   render() {
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
               <section className="grid"></section>
            </main>
         </>
      );
   }
}

export default products;
