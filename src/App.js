import React from "react";
import "./styles.css";
import moveImage from "./components/moveImage";

const App = () => {
  return (
    <div className="App">
      <h1>Animation 101</h1>
      <canvas id="can" width="800" height="500"></canvas>
      <button onClick={moveImage}> Play </button>
    </div>
  );
};

export default App;
