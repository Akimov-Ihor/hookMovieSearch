import React, { useEffect, useReducer } from "react";
import "../App.css";
import Header from "./Header/Header.jsx";
import Movie from "./Movie/Movie.jsx";
import Search from "./Search/Search.jsx";
import MovieDescription from "./Movie/MovieDescription/MovieDescription";
import { Route } from "react-router-dom";



const InitialSetup = {
  loading: true,
  movies: [],
  errorMessage: null,
  id: null,
  movieBody: [{
    Actors: "Andrew Garfield, Emma Stone, Rhys Ifans, Denis Leary",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    Production: "Sony Pictures",
    Rated: "PG-13",
    Released: "03 Jul 2012",
    Runtime: "136 min",
    Title: "The Amazing Spider-Man",
    Type: "movie",
    Website: "N/A",
    imdbID: "tt0948470",
    imdbRating: "6.9",
    imdbVotes: "547,207"
  }]

}
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      }
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    case "SEARCH_MOVIES_ID":
      return {
        ...state,
        loading: false,
        id: action.payload.imdbID,
        movieBody: action.payload
      }
    default:
      return state
  }
}




const App = () => {
  const [state, dispatch] = useReducer(reducer, InitialSetup)

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=man&apikey=6ee8dc")
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse)
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search

        })
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=6ee8dc`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          })
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            payload: jsonResponse.Error
          })
        }
      });
  };


  const aboutMovie = movieId => {
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=6ee8dc`)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_ID",
          payload: jsonResponse
        })

      })

    console.log(state)

  }

  const { loading, movies, errorMessage, id, movieBody } = state
  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search search={search} />
        <p className="App-intro">
          Sharing a few of our favourite movies
        </p>
      <div className="movies">
        <Route exact path="/">
          {loading && !errorMessage ? 
          (
            <span>loading...</span>
          )
            : errorMessage ? 
            (
              <div className="errorMessage">
                {errorMessage}
              </div>
            )
              : (
                movies.map((movie, index) =>
                 (
                  <Movie
                    key={`${index}-${movie.Title}`}
                    movie={movie}
                    aboutMovie={aboutMovie}
                  />
                ))
              )}
        </Route>
        <Route
          path="/info"
        >
          <MovieDescription
            movieBody={movieBody}
          />
        </Route>
      </div>





    </div>
  );
};


export default App;
