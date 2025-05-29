import React from "react";
import "./Panel.css";
import Rating from "./Rating";
export default class Panel extends React.Component {
  render() {
    return (
      <div className="panel-container">
        <h1 className="heading" style={{color:"rgb(207, 150, 26)", fontSize:"34px", marginLeft:"20opx"}}>Movie List</h1>
        {this.props.movieArray?.length === 0 ? (
          <p></p>
        ) : (
          <div className="movie-list">
            {this.props.movieArray.map((movie, index) => (
              <div key={index} className="movie-item">
                <img
                  src={movie.moviePoster}
                  alt={movie.movieName}
                  className="movie-poster"
                />
                <div className="movie-info">
                  Movie Name:-<strong>{movie.movieName}</strong>
                  <br />
                  <br />
                  Time :- <strong>{movie.Duration} min</strong>
                  <br />
                  <br />
                  Release Date:- <strong>{movie.movieDirector}</strong>
                </div>
                <div className="rating">
                  <Rating />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

 