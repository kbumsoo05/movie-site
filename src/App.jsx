import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [toDo, setToDo] = React.useState("");
  const [toDos, setToDos] = React.useState([]);
  const onChange = (event) => { setToDo(event.target.value) };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((prev) => [toDo, ...prev]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
        />
        <button>add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default App;