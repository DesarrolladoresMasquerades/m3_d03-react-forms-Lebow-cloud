import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";

import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [moviesData, setMoviesData] = useState(moviesDataJSON);
  const [movies, setMovies] = useState(moviesDataJSON);

  function addMovie(newMovie){
    setMoviesData([...moviesData, newMovie]);

    setMovies([...moviesData, newMovie].sort((a,b)=>a.title > b.title));
  }

  function filterMovieList(capp){

    let filteredMovies 
    if(movies = "All"){

      filteredMovies = moviesData
    }else{
      filteredMovies = moviesData.filter((movie)=>{
        return movie.title[0].toLowerCase() === capp.toLowerCase()
      })
    }
    

    setMovies(filteredMovies)
  }


  return (
    <div>
      <FilterMovies filterMovies={filterMovieList} />
      <AddMovie addMovie={addMovie} />
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
