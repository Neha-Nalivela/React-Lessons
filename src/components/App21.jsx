import React from "react";
import Register from "./Register";
import Login from "./Login";
import "./App21.css";
import { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
export default function App21() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <AppContext.Provider value={{ users, setUsers }}>
        <h1>App21</h1>
        <h2>Assignment</h2>
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center"}}>
          <div className="Register">
            <Register />
          </div>
          <div className="Login">
            <Login />
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}