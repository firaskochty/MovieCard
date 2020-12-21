import React, { useState } from "react";
import Search from "./Components/Search/search";
import MovieList from "./Components/MovieList/MovieList";
import AddMovie from "./Components/AddMovie/addMovie";
import { moviesData } from './MoviesData';
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchRate, setSearchRate] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  
  const handleSearch = (event) => setSearchValue(event.target.value);
  
  const handleSearchRate = (newRate) => setSearchRate(newRate);

  
  const addMovie = (newMovie) => setMovies([...movies, newMovie]);
  return (
    
    <div>
      <Search
        searchValue={searchValue}
        handleSearch={handleSearch}
        searchRate={searchRate}
        handleSearchRate={handleSearchRate}
      />
      
      <AddMovie handleAdd={addMovie} movieList={moviesData}/>
      
          
           <MovieList
        movieList={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLowerCase().trim()) &&
            movie.rating >= searchRate
        )}
      />
            
            


    </div>
    
  );
};

export default App;
