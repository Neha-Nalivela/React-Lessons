import React, { useState, createContext } from 'react';
import Register from './Register';
import Login from './Login';

export const AppContext = createContext();

export default function App21() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Registration Form</h1>
      <AppContext.Provider value={{ user, setUser, message, setMessage }}>
        <Register />
        <Login />
      </AppContext.Provider>
    </div>
  );
}
