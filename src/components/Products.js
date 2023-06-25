import React, { Component } from "react";
import "../styles/products.css";
import Product from "./Product";
import axios from "axios";
class products extends Component {
   constructor(props) {
      super(props);
      this.state = {
         movies: [],
         filterMovies: [],
         genre: [],
      };
   }

   componentDidMount() {
      this.gatData();
   }
   gatData = () => {
      axios.get("/movies.json").then((Response) =>
         this.setState({
            movies: Response.data,
            filterMovies: Response.data,
         })
      );
   };
   showSearchBox = () => {
      let search = document.querySelectorAll(".search-box");
      search.forEach((element) => {
         element.classList.toggle("d-block");
      });
   };
   searchValue = (event) => {
      if (event.target.value !== "") {
         let filterResult = this.state.movies.filter((item) => {
            return item.Title.toLowerCase().includes(event.target.value);
         });
         console.log(filterResult);
         this.setState({ filterMovies: filterResult });
      } else {
         this.setState({ filterMovies: this.state.movies });
      }
   };
   listGenre = () => {
      const genreSet = new Set();
      this.state.movies.forEach((item) => {
         const genreList = item.Genre.split(", ");
         genreList.forEach((genre) => genreSet.add(genre));
      });
      this.setState({ genre: [...genreSet] });
   };

   render() {
      const { movies, filterMovies, genre } = this.state;

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
                        {/* {genre.forEach((g) => {
                           console.log("gg");
                        })} */}
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

                        <div
                           className="search flex"
                           onClick={this.showSearchBox}
                        >
                           <i className="fa fa-search"></i>

                           <span className="lable">Search</span>
                        </div>

                        <div className="search-box">
                           <input
                              type="search"
                              id="search"
                              name="search"
                              placeholder="Enter your Movies Name"
                              className="search-box"
                              onChange={this.searchValue}
                           ></input>
                        </div>
                     </div>
                  </div>
               </section>
               <section className="grid">
                  {filterMovies.map((m) => {
                     return <Product image={m.Poster} Title={m.Title} />;
                  })}
               </section>
               <button className="more">load more</button>
            </main>
            {this.listGenre()}
         </>
      );
   }
}

export default products;
