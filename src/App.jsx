import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [load, setLoad] = React.useState(true);
  const [item, setItem] = React.useState([]);
  const setMovies = async () => {
    const json = await (await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.9&sort_by=year"
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
        <div>
          {item.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <span>{movie.year}</span>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map(genres => <li key={genres}>{genres}</li>)}
              </ul>
              <hr />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default App;