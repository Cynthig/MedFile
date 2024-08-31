import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../index.css';  // Assuming you have a separate CSS file

const HomePage = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Default to admin
  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((role === 'admin' && password === 'admin123') || (role === 'doctor' && password === 'doctor123')) {
      onLogin(role === 'admin' ? 'Administrator' : 'Doctor');
      navigate('/dashboard'); // Navigate to the dashboard after successful login
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="avatar"></div>
        <h2>{role === 'admin' ? 'Administrator' : 'Doctor'}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <select value={role} onChange={handleChangeRole}>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
          </select>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
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
