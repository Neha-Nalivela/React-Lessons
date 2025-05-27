import React, { useContext, useState } from 'react';
import { AppContext } from './App21';

export default function Register() {
  const { setMessage } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && username && password) {
      setMessage('Registered Successfully!');
    } else {
      setMessage('All fields are required');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <p>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </p>
        <p>
            <input
              type="text"
              placeholder="Enter User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
        </p>
        <p>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
