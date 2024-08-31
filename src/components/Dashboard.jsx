import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';  // Make sure your CSS handles all the necessary styles

import CreatePatient from './CreatePatient';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <div className="dashboard-content">
          <div className="dashboard-item" onClick={() => navigate('/patients')}>
            <h2>Total Patients</h2>
            <p>76</p>
          </div>
          <div className="dashboard-item" onClick={() => navigate('/messages')}>
            <h2>Messages</h2>
            <p>12</p>
          </div>
          <div className="dashboard-item" onClick={() => navigate('/patients-visited-today')}>
            <h2>Patients Visited Today</h2>
            <p>10</p>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Dashboard;
