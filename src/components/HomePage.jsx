import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../index.css';  // Assuming you have a separate CSS file
import Sidebar from './Sidebar';

const HomePage = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Default role set to admin
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'admin' && password === 'admin123') {
      onLogin('Administrator');
      navigate('/admindashboard'); // Navigatdfe to the admin dashboard
    } else if (role === 'doctor' && password === 'doctor123') {
      onLogin('Doctor');
      navigate('/dashboard'); // Navigate to the doctor dashboard
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="avatar"></div>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <select value={role} onChange={handleRoleChange}>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
          </select>
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
