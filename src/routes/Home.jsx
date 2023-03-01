import React, { useState, useRef, useEffect } from "react";
import Movie from '../components/movie'

const Home = () => {
  const [load, setLoad] = React.useState(true);
  const [item, setItem] = React.useState([]);
  const setMovies = async () => {
    const json = await (await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year"
    )).json();
    setItem(json.data.movies);
    setLoad(false);
  }
  console.log(item);
  useEffect(() => { setMovies() }, []);

  return (
    <div>
      <h1>Movie</h1>
      {load ? <h5>loading...</h5> :
        item.map((movie) => (
          <Movie
            id={movie.id}
            title={movie.title}
            image={movie.medium_cover_image}
            year={movie.year} summary={movie.summary}
            genres={movie.genres}
          />
        ))}
    </div>
  );
}

export default Home;