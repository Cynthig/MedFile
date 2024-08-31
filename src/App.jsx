// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import Records from './components/Records';
import CreatePatient from './components/CreatePatient';
import Dashboard from './components/Dashboard';
import CalendarComponent from './components/Calendar'; // Import Calendar
import Sidebar from './components/Sidebar';
import { initDB } from './services/indexedDBService';

const App = () => {
  const [practitioner, setPractitioner] = useState(null);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    initDB().catch(error => console.log("Database initialization error: ", error));
  }, []);

  const handleSavePatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  const handleLogin = (practitioner) => {
    setPractitioner(practitioner);
  };

  const AuthenticatedRoute = ({ children }) => {
    if (!practitioner) {
      return <Navigate to="/" replace />;
    }
    return (
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onLogin={handleLogin} />} />
        <Route 
          path="/patients" 
          element={
            <AuthenticatedRoute>
              <PatientList patients={patients} />
            </AuthenticatedRoute>
          } 
        />
        <Route 
          path="/patient-form" 
          element={
            <AuthenticatedRoute>
              <PatientForm onSave={handleSavePatient} />
            </AuthenticatedRoute>
          } 
        />
        <Route 
          path="/records" 
          element={
            <AuthenticatedRoute>
              <Records />
            </AuthenticatedRoute>
          } 
        />
        <Route 
          path="/create-patient" 
          element={
            <AuthenticatedRoute>
              <CreatePatient />
            </AuthenticatedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <AuthenticatedRoute>
              <Dashboard />
            </AuthenticatedRoute>
          } 
        />
        <Route 
          path="/calendar" 
          element={
            <AuthenticatedRoute>
              <CalendarComponent />
            </AuthenticatedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
