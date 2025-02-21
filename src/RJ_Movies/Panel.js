// import React from "react";
// import "./Panel.css"
// import Form from "./Form";
// export default class Panel extends React.Component{
//     render(){
//         return(
//             <div className="Panel-container">
//                 <h1>Movies Lists</h1>
               
//             </div>
//         )
//     }
// }
// ---------------------------------------------------------------------------------------------------
import React from "react";
import "./Panel.css";

export default class Panel extends React.Component {
  render() {
    return (
      <div className="Panel-container">
        <h1>Movies List</h1>
        <div className="movies-grid">
          {this.props.movies.length === 0 ? (
            <p> Add Movies </p>
          ) : (
            this.props.movies.map((movie,index) => (
              <div key={index} className="movie-card">
                <img src={movie.image} alt={movie.name} style={{height:"100px", width:"150px"}} />
                <h2>{movie.name}</h2>
                <p>Year: {movie.year}</p>
                <p>Duration: {movie.duration}</p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
