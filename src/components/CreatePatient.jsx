import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPatient } from '../services/indexedDBService';

function CreatePatient() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    surname: '',
    idNumber: '',
    address: ''  // Added address field
  });

  const handleCreatePatient = () => {
    navigate('/patient-form');
  };

  const handleOpenPatientFile = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const savePatientData = () => {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    patients.push(patientDetails);
    localStorage.setItem('patients', JSON.stringify(patients));
  };

  const downloadJSON = () => {
    const data = JSON.parse(localStorage.getItem('patients')) || [];
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'patients_data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async () => {
    try {
      const patients = await fetchPatient(patientDetails.name, patientDetails.surname, patientDetails.idNumber);
      if (patients.length > 0) {
        navigate('/patient-data-handler', { state: { patient: patients[0] } });
      } else {
        savePatientData();
        downloadJSON();
        alert('Patient data saved successfully!');
      }
    } catch (error) {
      console.error("Error fetching patient:", error);
      alert('Error fetching patient data');
    }
    handleCloseModal();
  };

  return (
    <div>
  

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Enter Patient Details</h3>
            <input 
              type="text" 
              name="name" 
              value={patientDetails.name} 
              onChange={handleChange} 
              placeholder="Patient's Name" 
            />
            <input 
              type="text" 
              name="surname" 
              value={patientDetails.surname} 
              onChange={handleChange} 
              placeholder="Patient's Surname" 
            />
            <input 
              type="text" 
              name="idNumber" 
              value={patientDetails.idNumber} 
              onChange={handleChange} 
              placeholder="Patient's ID" 
            />
            <input 
              type="text" 
              name="address" 
              value={patientDetails.address} 
              onChange={handleChange} 
              placeholder="Patient's Address" 
            />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePatient;
