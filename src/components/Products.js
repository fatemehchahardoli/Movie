import React, { Component } from "react";
import "../styles/products.css";
import Product from "./Product";
import axios from "axios";
import Filter from "./Filter";
class products extends Component {
   constructor(props) {
      super(props);
      this.state = {
         movies: [],
         tempMovies: [],
         genre: [],
      };
   }

   componentDidMount() {
      this.gatData();
   }
   //Axios for get data
   gatData = () => {
      axios.get("/movies.json").then((Response) =>
         this.setState({
            movies: Response.data,
            tempMovies: Response.data,
         })
      );
   };

   //show or hide search button for search movie
   showSearchBox = () => {
      let search = document.querySelectorAll(".search-box");
      search.forEach((element) => {
         element.classList.toggle("d-block");
      });
   };

   //search movie
   searchValue = (event) => {
      this.listGenre();
      if (event.target.value !== "") {
         let filterResult = this.state.movies.filter((item) => {
            return item.Title.toLowerCase().includes(
               event.target.value.toLowerCase()
            );
         });
         this.setState({ tempMovies: filterResult });
      } else {
         this.setState({ tempMovies: this.state.movies });
      }
   };

   //giv list genres in movies
   listGenre = () => {
      const genreSet = new Set();
      this.state.movies.forEach((item) => {
         const genreList = item.Genre.split(", ");
         genreList.forEach((genre) => genreSet.add(genre));
      });

      const setToArray = [...genreSet];
      this.setState({ genre: setToArray });
   };
   //search movies with genre
   movieSet = new Set();
   searchWithGenre = (event) => {
      let movies = new Set();
      const title = event.target.innerText.toLowerCase();
      const result = this.state.movies.filter((movie) => {
         return movie.Genre.toLowerCase().includes(title);
      });
      this.movieSet.add(result);
      this.movieSet.forEach((movie) => {
         movie.forEach((m) => {
            movies.add(m);
         });
      });
      this.setState({ tempMovies: [...movies] });
   };
   render() {
      const { movies, tempMovies, genre } = this.state;

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
                        <Filter
                           genre={genre}
                           searchWithGenre={this.searchWithGenre}
                        ></Filter>
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
                  {/* show movies */}
                  {tempMovies.map((m, index) => {
                     return (
                        <Product image={m.Poster} Title={m.Title} key={index} />
                     );
                  })}
               </section>
               <button className="more">load more</button>
            </main>
         </>
      );
   }
}

export default products;
