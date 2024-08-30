import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Assuming you have a CSS file for styling

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation, replace with your authentication logic
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      onLogin(credentials.username);
      navigate('/HomePage'); // Redirect to the dashboard
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          value={credentials.username} 
          onChange={handleChange} 
          placeholder="Username" 
          required 
        />
        <input 
          type="password" 
          name="password" 
          value={credentials.password} 
          onChange={handleChange} 
          placeholder="Password" 
          required 
        />
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
