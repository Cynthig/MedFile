import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { fetchPatient } from '../services/indexedDBService';

function CreatePatient() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    surname: '',
    idNumber: ''
  });

  const handleCreatePatient = () => {
    navigate('/patient-form');
  };

  const handleOpenPatientFile = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    setPatientDetails({
      ...patientDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    try {
      const patients = await fetchPatient(patientDetails.name, patientDetails.surname, patientDetails.idNumber);
      if (patients.length > 0) {
        navigate('/patient-data-handler', { state: { patient: patients[0] } });
      } else {
        alert('Patient not found');
      }
    } catch (error) {
      console.error("Error fetching patient:", error);
      alert('Error fetching patient data');
    }
    handleCloseModal();
  };

  return (
    <div>
      <h2>What would you like to do Today?</h2>
      <button onClick={handleCreatePatient}>Create new Patient</button>
      <button onClick={handleOpenPatientFile}>Open patient file</button>

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
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePatient;