// src/components/PatientForm.jsx
import React, { useState } from 'react';
import { Patient } from '../models/Patient';
import { encrypt } from '../utils/crypto';

const PatientForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    surname: '',
    middleNames: '',
    hospitalId: '',
    currentDiagnosis: '',
    previousDiagnosis: '',
    currentMeds: '',
    previousMeds: '',
    visits: '',
    idNumber: '',
    fileNumber: '',
    nextOfKin: '',
    emergencyContacts: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encryptedHospitalId = encrypt(formData.hospitalId);
    const newPatient = new Patient(
      formData.id,
      formData.name,
      formData.surname,
      formData.middleNames,
      encryptedHospitalId,
      formData.currentDiagnosis,
      formData.previousDiagnosis,
      formData.currentMeds,
      formData.previousMeds,
      formData.visits,
      formData.idNumber,
      formData.fileNumber,
      formData.nextOfKin,
      formData.emergencyContacts
    );
    onSave(newPatient);
  };

  return (
    <>
      <h1>Patient file.</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields here */}
        <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="ID" />
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname" />
        <input type="text" name="middleNames" value={formData.middleNames} onChange={handleChange} placeholder="Middle Names" />
        <input type="text" name="hospitalId" value={formData.hospitalId} onChange={handleChange} placeholder="Hospital ID" />
        <input type="text" name="currentDiagnosis" value={formData.currentDiagnosis} onChange={handleChange} placeholder="Current Diagnosis" />
        <input type="text" name="previousDiagnosis" value={formData.previousDiagnosis} onChange={handleChange} placeholder="Previous Diagnosis" />
        <input type="text" name="currentMeds" value={formData.currentMeds} onChange={handleChange} placeholder="Current Meds" />
        <input type="text" name="previousMeds" value={formData.previousMeds} onChange={handleChange} placeholder="Previous Meds" />
        <input type="text" name="visits" value={formData.visits} onChange={handleChange} placeholder="Visits" />
        <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="ID Number" />
        <input type="text" name="fileNumber" value={formData.fileNumber} onChange={handleChange} placeholder="File Number" />
        <input type="text" name="nextOfKin" value={formData.nextOfKin} onChange={handleChange} placeholder="Next of Kin" />
        <input type="text" name="emergencyContacts" value={formData.emergencyContacts} onChange={handleChange} placeholder="Emergency Contacts" />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default PatientForm;
