import React, { useState } from "react";
import "./App19.css";
import { useNavigate } from "react-router-dom";
export default function App19() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [result, setResult] = useState("");
  const Navigate = useNavigate();
  const GameOver = wicket >= 10;

  const handleRun = () => {
    if (!GameOver) {
      setRun((prevRun) => prevRun + 1);
      setResult("Well Done");
    }
  };

  const handleWicket = () => {
    if (!GameOver) {
      setWicket((prevWicket) => prevWicket + 1);
      setResult("Better Luck Next Time");
    }
  };

  const navToApp1 = () => {
    Navigate("/")
  }

  return (
    <div>
      <h1>App19</h1>
      <h2>Assignment</h2>
      <h3 className="h3">Cricket Score Board</h3>
      <div className="OverAll">
        
        <div className="Score">
          <p>Runs: {run}</p>
          <button onClick={handleRun}>Run</button>
          <p>Wickets: {wicket}</p>
          <button onClick={handleWicket}>Wicket</button>
        </div>
        <div className="Result">
          <p>Result: {result}</p>
          <p>{GameOver ? "Game Over" : ""}</p>
        </div>
      </div>
      <hr/>

      <p><button onClick={navToApp1}>Go to App1</button></p>
    </div>
  );
}
