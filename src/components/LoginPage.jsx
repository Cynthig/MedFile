import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      onLogin('admin');
      navigate('/HomePage');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-left-section">
        <div className="branding">
          <h1>My Discounted Labs</h1>
        </div>
      </div>
      <div className="login-right-section">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Sign In</h2>
          <div className="input-wrapper">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              value={username}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="sign-up-button">
            Sign Up
          </button>
          <p>
            I have an Account? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
