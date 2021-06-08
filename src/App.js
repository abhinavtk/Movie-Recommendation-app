import React, { useState } from "react";
import "./styles.css";

var movieDictionary = {
  action: [
    { name: "Fast & Furious", rating: "4/5" },
    { name: "Avengers End Game", rating: "4.5/5" },
    { name: "The Dark Knight", rating: "5/5" }
  ],
  comedy: [
    { name: "The Hangover", rating: "4/5" },
    { name: "Deadpool", rating: "4/5" }
  ],
  thriller: [
    { name: "Shutter Island", rating: "4.5/5" },
    { name: "Inception", rating: "4/5" }
  ]
};

var genreList = Object.keys(movieDictionary);

export default function App() {
  var [genre, genreHandler] = useState("action");
  function clickHandler(item) {
    genreHandler(item);
  }

  return (
    <div className="App">
      <h1>Movie Recommendations</h1>
      <h2>My rating of some Hollywood movies.</h2>

      {genreList.map((item) => (
        <button className="button" onClick={() => clickHandler(item)}>
          {item}
        </button>
      ))}
      <hr />

      <div className="output">
        <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
          {movieDictionary[genre].map((item) => (
            <li className="movieList">
              <div style={{ fontSize: "larger" }}>{item.name}</div>
              <div style={{ padding: ".3rem", fontSize: "smaller" }}>
                {item.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
