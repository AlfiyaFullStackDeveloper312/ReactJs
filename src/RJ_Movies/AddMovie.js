// import React from "react";
// import "./AddMovie.css"
// import Form from "./Form";
 
// export default class AddMovie extends React.Component{
//     constructor(props){
//     super(props);
//         this.state ={
//             showForm:false,
//         };
//     }
//         AddMovieForm = () => {
//             this.setState({ showForm: true }); 
//           };

//     render(){
//         return(
//             <div className="AddMovies-container">
//               <button  className="Add-movies"   onClick={this.AddMovieForm}>Add-Movies</button>
//                {this.state.showForm && <Form/>}
//             </div>
//         )
//     }
// }
//  ---------------------------------------------------------------------------
import React from "react";
import "./AddMovie.css";
import Form from "./Form";

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  AddMovieForm = () => {
    this.setState({ showForm: true });
  };

  hideForm = () => {
    this.setState({ showForm: false });
  };

  render() {
    return (
      <div className="AddMovies-container">
        <button className="Add-movies" onClick={this.AddMovieForm}>
          Add Movies
        </button>
        {this.state.showForm && (
          <Form addMovie={this.props.addMovie} hideForm={this.hideForm} />
        )}
      </div>
    );
  }
}

