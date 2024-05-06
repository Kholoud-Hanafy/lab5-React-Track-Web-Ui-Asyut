

import React, { useState } from 'react';
import './style.css';

function LogInForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   console.log(onLogin)
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username && password) {
      onLogin(); 

    } else {
      
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LogInForm;



  
