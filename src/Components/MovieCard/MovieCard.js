import React from "react";
import StarRating from "../StarRating";
import { Button } from "react-bootstrap";
import "./MovieCard.css";



const MovieCard = ({ film }) => {
  return (
    <div className="movie-card">
      <StarRating rate={film.rating} />
      <img src={film.image} alt={film.name} />
      <h3> {film.name} </h3>
      <p>{film.date} </p>
      <div className="card_right__review">
          <p>{film.Description}</p>
          
          <Button >Read more</Button>
       
        </div>
    </div>
  );
};

export default MovieCard;
