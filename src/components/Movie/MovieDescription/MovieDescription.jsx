import React from 'react'


const MovieDescription = ({movieBody}) => {
      
    return (
        <div className="MovieDescription">
            <h2>{movieBody.Title}</h2>
            <div>
                <img
                    // width="200"
                    alt={`The movie titled: ${movieBody.Title}`}
                    src={movieBody.Poster}
                />
                <div>
                    <span>{movieBody.BoxOffice}</span>
                    <span>{movieBody.Country}</span>
                    <span>{movieBody.Genre}</span>
                    <span>{movieBody.Metascore}</span>
                    <span>{movieBody.Plot}</span>
                    <span>{movieBody.Released}</span>
                    <span>{movieBody.Writer}</span>
                </div>
            </div>

    <span>{movieBody.Genre}</span>
            <span>{movieBody.imdbRating}</span>
            <p>({movieBody.Year})</p>
        </div>
    )
}
export default MovieDescription