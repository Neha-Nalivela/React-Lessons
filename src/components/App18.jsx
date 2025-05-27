import React, { useState } from 'react'
import {useMemo} from 'react'
export default function App18() {
    const [count,setCount] = useState(0);
    const [flag, setFlag] = useState(10);
    const f1 = () => {
        let i;
        for(i = 1; i < flag**2; i++){}
        console.log("F1 function Called")
        return i;
    }
    const result = f1();
  return (
    <div>
        <h1>App18</h1>
        <h2>UseMemo</h2>
        <p>
            <button onClick={()=> setCount(count +1)}>Count: {count}</button>
        </p>
        <p>
            <button onClick={() => setFlag(flag + 1)}>Flag: {flag}</button>
        </p>
        <p>Result: {result}</p>
    </div>
  )
}
