import React from "react"
import MovieCard from "../MovieCard/MovieCard";
import './index.css';


const AddMovie = ({movieList}) => {
  return (
    <div className="movie-list">
     {movieList.map((movie) => ( 
     <MovieCard film={movie} />
     ))}
    </div>
  )
}

export default AddMovie;
