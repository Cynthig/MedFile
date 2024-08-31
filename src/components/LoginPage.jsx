import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const LoginPage = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      onLogin('admin');
      navigate('/HomePage');
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="avatar"></div>
        <h2>Administrator</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={handleChange}
            placeholder=""
            required
          />
          <button type="submit">→</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
