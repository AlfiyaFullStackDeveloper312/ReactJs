// import React from "react";
// import "./Form.css";
// export default class Form extends React.Component {
//   render() {                                                                                                              
//     return (
//       <>
//         <form>
//             <fieldset style={{height:"auto", width:"400px"}}  > 
//            <legend>Movie Information</legend>
//           {/* movies name */}
//           <label for="Movie name"></label>
//           <input type="text" placeholder=" Movie Name"></input>
//           <br/>
//           <br/>
//           {/* image */}
//           <label for="Movie URL"></label>
//           <input type="text" placeholder=" Movie URL"></input>
//           <br/>
//           <br/>
//           {/* release date*/}
//           <label for="Release-Date"></label>
//           <input type="text" placeholder="Release-Date"></input>
//           <br/>
//           <br/>
//           {/* duration  movie */}
//           <label for="Movie-Duration"></label>
//           <input type="text" placeholder="Movie-Duration"></input>
//           <br/>
//           <br/>
//           {/* button */}
//           <button className="button-form" type="submit">
//             Submit
//           </button>
//           </fieldset>
//         </form>
//       </>
//     );
//   }
// }
// --------------------------------------------------------------------
import React, { useState } from "react";
import "./Form.css";

export default function Form({ addMovie, hideForm }) {
  const [movie, setMovie] = useState({
    name: "",
    image: "",
    year: "",
    duration: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.name && movie.image && movie.year && movie.duration) {
      addMovie(movie);     
      hideForm();  
      setMovie({ name: "", image: "", year: "", duration: "" });  
    }
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      
      <input
        type="text"
        name="name"
        placeholder="Movie Name"
        value={movie.name}
        onChange={handleChange}
        required
      />
   
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={movie.image}
        onChange={handleChange}
        required
      />
        
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={movie.year}
        onChange={handleChange}
        required
      />
        
      <input
        type="text"
        name="duration"
        placeholder="Duration"
        value={movie.duration}
        onChange={handleChange}
        required
      />
      <button type="submit"  >Submit</button>
  
    </form>
  );
}
