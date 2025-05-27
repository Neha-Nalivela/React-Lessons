import React, { useContext, useState } from 'react';
import { AppContext } from './App21';

export default function Login() {
  const { setUser, message, setMessage } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({ email });
      setMessage('Login Successful!');
    } else {
      setMessage('Please enter all fields');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </p>
        <button type="submit">Submit</button>
      </form>
      <div>{message}</div>
    </div>
  );
}
