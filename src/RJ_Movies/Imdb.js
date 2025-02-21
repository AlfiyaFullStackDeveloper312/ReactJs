// import React from "react";
// import "./Imdb.css"
// import Header from "./Header";
// import Panel from "./Panel";
// import Movies from "./MoviesList"
// export default class Imdb extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//            Movies: Movies,
          
//         };
//       }
//     render(){
//         return(
//             <div className="imdb-container">
//                 <Header/>
//                 <Panel data={this.state.MoviesList} />
//             </div>
//         )
//     }
// }
// ------------------------------------------------------------------------------------
import React from "react";
import "./Imdb.css";
import Header from "./Header";
import Panel from "./Panel";
import AddMovie from "./AddMovie";

export default class Imdb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], 
    };
  }

  addMovie = (newMovie) => {
    this.setState({ movies: [...this.state.movies,newMovie] });
  };

  render() {
    return (
      <div className="imdb-container">
        <Header  />
        <br/>
        <AddMovie addMovie={this.addMovie} />
        <Panel movies={this.state.movies}
         />                          
      </div>
    );
  }
}

