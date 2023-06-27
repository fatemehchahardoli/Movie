import React, { Component } from "react";
class Filter extends Component {
   render() {
      const { genre, searchWithGenre } = this.props;
      return (
         <>
            {genre.map((g) => {
               console.log(g);
               return <button>{g}</button>;
            })}
         </>
      );
   }
}

export default Filter;
// onClick={(event) => searchWithGenre(event)}
