// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import Records from './components/Records';

const App = () => {
  const [practitioner, setPractitioner] = useState(null);
  const [patients, setPatients] = useState([]);

  const handleSavePatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  const handleLogin = (practitioner) => {
    setPractitioner(practitioner);
  };

  return (
    <Router>
      <header className="header">
        <nav>
          <ul>
            
            {practitioner && (
              <>
                <li>
                  <Link to="/patients">Patient List</Link>
                </li>
                <li>
                  <Link to="/create-patient">Create Patient File</Link>
                </li>
                <li>
                  <Link to="/records">Records</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage onLogin={handleLogin} />} />
          {practitioner && (
            <>
              <Route path="/patients" element={<PatientList patients={patients} />} />
              <Route path="/create-patient" element={<PatientForm onSave={handleSavePatient} />} />
              <Route path="/records" element={<Records />} />
            </>
          )}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
