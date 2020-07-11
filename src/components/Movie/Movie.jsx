import React from "react";
import { NavLink } from "react-router-dom";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie,aboutMovie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <span>{movie.imdbID}</span>
      <p>({movie.Year})</p>
      <NavLink to={'/info/'}>
     <button onClick={()=>{aboutMovie(movie.imdbID)}}>More Information</button>
     </NavLink>
    </div>
  );
};


export default Movie;