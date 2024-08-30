import React, { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';

const PatientDataHandler = () => {
  const location = useLocation();
  const patient = location.state?.patient;

  if (!patient) {
    return <div>No patient data available</div>;
  }

  return (
    <div>
      <h1>Patient Information</h1>
      <table>
        <tbody>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          {Object.entries(patient).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientDataHandler;