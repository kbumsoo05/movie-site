import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [load, setLoad] = React.useState(true);
  const [item, setItem] = React.useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      .then((respones) => respones.json())
      .then((json) => {
        setItem(json.data.movies);
        setLoad(false);
        console.dir(json.data.movies);
        console.dir(item);
      });
  }, [])

  return (
    <div>
      <h1>Movie</h1>
      {load ? <h5>loading...</h5> : null}
      <ul>
        {item.map((item) => <li>{item.title}</li>)}
      </ul>
    </div>
  );
};

export default App;