import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import Records from './components/Records';
import CreatePatient from './components/CreatePatient';
import PatientDataHandler from './components/PatientDataHandler';
import Dashboard from './components/Dashboard';
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

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage onLogin={handleLogin} />} />
          <Route 
            path="/patients" 
            element={practitioner ? <PatientList patients={patients} /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/patient-form" 
            element={practitioner ? <PatientForm onSave={handleSavePatient} /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/records" 
            element={practitioner ? <Records /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/create-patient" 
            element={practitioner ? <CreatePatient /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/patient-data-handler" element={practitioner ? <PatientDataHandler /> : <Navigate to="/" replace />} 
          />
           <Route 
            path="/dashboard" element={practitioner ? <Dashboard /> : <Navigate to="/" replace />} 
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;