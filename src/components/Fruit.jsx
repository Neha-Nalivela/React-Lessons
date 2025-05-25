import React from "react";
import "./Fruit.css"
export default function Fruit(props) {
  return (
    <div>
      <div className="fruit-box">{props.name}</div>
    </div>
  );
}