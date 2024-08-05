import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = ({ onLogin }) => {
    const [practitioner, setPractitioner] = useState({ name: '', surname: '', id: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
      setPractitioner({ ...practitioner, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onLogin(practitioner);
    };
  
    return (
      <div>
        <h1>Welcome to the Patient File System</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={practitioner.name} onChange={handleChange} placeholder="Name" required />
          <input type="text" name="surname" value={practitioner.surname} onChange={handleChange} placeholder="Surname" required />
          <input type="text" name="id" value={practitioner.id} onChange={handleChange} placeholder="ID" required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
export default HomePage;  