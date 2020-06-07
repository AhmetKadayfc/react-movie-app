import React from 'react'

const MoviesList = ({ movies }) => {
    const emptyMovies = (
        <p>This not a found film</p>
    )
    const movieList = (
        <p>Movie List</p>
    )
    return (
        <div>
            {movies.length !== 0 ? movieList : emptyMovies}
        </div>
    )
}
export default MoviesList