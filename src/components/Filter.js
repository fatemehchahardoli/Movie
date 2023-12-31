import React, { Component } from "react";
class Filter extends Component {
   render() {
      const { genre, searchWithGenre } = this.props;
      return (
         <>
            {genre.map((g, index) => {
               return (
                  <button
                     key={index}
                     onClick={(event) => {
                        searchWithGenre(event);
                     }}
                  >
                     {g}
                  </button>
               );
            })}
         </>
      );
   }
}

export default Filter;
// onClick={(event) => searchWithGenre(event)}
