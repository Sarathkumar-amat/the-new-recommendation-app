import React, { useState } from "react";
import "./styles.css";

var rList = ["Anime", "movies", "TVshows"];
const showDB = {
  Anime: [
    { name: "Monster", rating: "4.5/5" },
    { name: "Attack on Titan", rating: "4/5" },
    { name: "Fullmetal Alchemist:Brotherhood", rating: "4/5" }
  ],
  movies: [
    { name: "Fight Club", rating: "4.5/5" },
    { name: "Taxi Driver", rating: "4.5/5" },
    { name: "Interstellar", rating: "4.5/5" }
  ],
  TVshows: [
    { name: "Breaking Bad", rating: "5/5" },
    { name: "Rick and Morty", rating: "4.5/5" },
    { name: "Bojack horseman", rating: "4.5.5" }
  ]
};
export default function App() {
  const [userInput, setUserInput] = useState("Anime");
  function genreClickHandler(element) {
    setUserInput(element);
  }
  return (
    <div className="App">
      <h1>My recommendations....</h1>
      <p>Here are my recommendations on movies, anime, TVshows..</p>{" "}
      <div>
        {rList.map((element) => (
          <span
            onClick={() => genreClickHandler(element)}
            style={{
              cursor: "pointer",
              background: "#FF6F61",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid blue",
              margin: "1rem 0.3rem"
            }}
          >
            {element}
          </span>
        ))}
      </div>{" "}
      <br />
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          <div style={{ textAlign: "left" }}>
            <ul style={{ paddingInlineStart: "0" }}>
              {showDB[userInput].map((show) => (
                <li
                  key={show.name}
                  style={{
                    listStyle: "none",
                    padding: "1rem",
                    border: "1px solid blue",
                    width: "70%",
                    margin: "1rem 0rem",
                    borderRadius: "0.5rem"
                  }}
                >
                  <div style={{ fontSize: "larger" }}> {show.name} </div>
                  <div style={{ fontSize: "smaller" }}> {show.rating} </div>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}
