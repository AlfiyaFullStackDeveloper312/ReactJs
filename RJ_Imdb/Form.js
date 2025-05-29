import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      Duration: "",
      movieDirector: "",
      moviePoster: "", // New field for movie poster URL
    };
  }

  // Handle input changes
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Handle form submission
  submitFunction = (event) => {
    event.preventDefault();
    const { movieName, Duration, movieDirector, moviePoster } = this.state;

    // Validate inputs before adding
    if (
      movieName.trim() &&
      Duration.trim() &&
      movieDirector.trim() &&
      moviePoster.trim()
    ) {
      this.props.addMovie({ movieName, Duration, movieDirector, moviePoster });

      // Reset form fields after submission
      this.setState({
        movieName: "",
        Duration: "",
        movieDirector: "",
        moviePoster: "",
      });
    }
  };

  render() {
    return (
      <div className="form-panel">
        <form onSubmit={this.submitFunction}>
          <fieldset>
            <legend>Movie Information</legend>
            <input className="form"
              type="text"
              name="movieName"
              value={this.state.movieName}
              onChange={this.handleChange}
              placeholder="Enter Movie Name"
            />
            <br />
            <br />
            <input className="form"
              type="text"
              name="moviePoster"
              value={this.state.moviePoster}
              onChange={this.handleChange}
              placeholder="Enter Movie  URL"
            />
            <br />
            <br />
            <input className="form"
              type="text"
              name="Duration"
              value={this.state.Duration}
              onChange={this.handleChange}
              placeholder="Enter Movie Duration"
            />
            <br />
            <br />

            <input className="form"
              type="Date"
              name="movieDirector"
              value={this.state.movieDirector}
              onChange={this.handleChange}
              placeholder="Enter Movie Release Date"
            />
            <br />
            <br />

            <button className="sub-btn" type="submit">
              Add Movie
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
