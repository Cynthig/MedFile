import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../index.css';  // Assuming you have a separate CSS file
import Sidebar from './Sidebar';

const HomePage = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Check for the correct password
      onLogin('Administrator');
      navigate('/dashboard'); // Navigate to the dashboard after successful login
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="avatar"></div>
        <h2>Administrator</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <button type="submit" aria-label="Submit">→</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
