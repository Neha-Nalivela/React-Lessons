import React from "react";
import { useRef } from "react";
export default function App15() {
  const nameRef = useRef();
  const n1 = useRef();
  const n2 = useRef();
  const res = useRef();
  const col = useRef();
  const change = useRef();
  const handleSubmit = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "black"
  };
  
  const Sum = () => {
    const r1 = n1.current.value;
    const r2 = n2.current.value;
    res.current.value = Number(r1) + Number(r2);
  };

  const ChangeColor = () => {
    const color = col.current.value;
    change.current.style.color = color;
  };

  return (
    <div>
      <h1>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>
      <p>
        <input type="text" ref={nameRef} />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      <p>
        <input type="text" placeholder="Enter Number1" ref={n1} />
        <input type="text" placeholder="Enter Number2" ref={n2} />
        <button onClick={Sum}>Submit</button>
        <p>
            <input type="text" placeholder="Result" ref={res} />
        </p>
      </p>
      <hr />
      <p>
        <input type="text" placeholder="Enter color" ref={col} />
        <button onClick={ChangeColor}>Submit</button>
        <h1 ref={change}>Hello World</h1>
      </p>
    </div>
  );
}