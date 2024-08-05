import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PatientList = ({ patients }) => {
    const navigate = useNavigate();
  
    return (
      <div>
        <h1>Patients</h1>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>{patient.name} {patient.surname}</li>
          ))}
        </ul>
        <button onClick={() => navigate('/create-patient')}>Create a New File</button>
      </div>
    );
  };

export default  PatientList;