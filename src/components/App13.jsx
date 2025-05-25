import React, { useState, useEffect } from 'react';

export default function App13() {
  const [input, setInput] = useState(0);
  const [results, setResults] = useState({
    add: 0,
    sub: 0,
    mul: 0,
    div: 0,
  });

  useEffect(() => {
    const num = parseFloat(input);
    if (!isNaN(num)) {
      setResults({
        add: 100 + num,
        sub: 100 - num,
        mul: 100 * num,
        div: num !== 0 ? (100 / num).toFixed(2) : '∞',
      });
    }
  }, [input]);

  return (
    <div>
      <h2>App13</h2>
      <div>
        <h1>Addition</h1>
        <p>100 + {input} = {results.add}</p>

        <h1>Subtraction</h1>
        <p>100 - {input} = {results.sub}</p>
      </div>

      <div>
        <input 
          value={input} 
          type="number" 
          placeholder="Enter Number" 
          onChange={(e) => setInput(e.target.value)} 
        />
      </div>

      <h1>Multiplication</h1>
      <p>100 * {input} = {results.mul}</p>

      <h1>Division</h1>
      <p>100 / {input} = {results.div}</p>
    </div>
  );
}
