import React, { useState } from 'react';
import { FaUser, FaIdCard, FaStethoscope, FaPills, FaHospital, FaPhone, FaUserFriends } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PatientForm.css';

const PatientForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    hospitalId: '',
    currentDiagnosis: '',
    previousDiagnosis: '',
    currentMeds: '',
    previousMeds: '',
    visits: '',
    fileNumber: '',
    nextVisit: new Date(),
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, field) => {
    setFormData({ ...formData, [field]: date });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.id) errors.id = 'ID is required';
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.surname) errors.surname = 'Surname is required';
    // Add more validation as needed
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const encryptedHospitalId = encrypt(formData.hospitalId);
    const newPatient = new Patient(
      encryptedHospitalId,
      formData.currentDiagnosis,
      formData.previousDiagnosis,
      formData.currentMeds,
      formData.previousMeds,
      formData.visits,
      formData.fileNumber,
    );
    onSave(newPatient);
  };

  return (
    <div className="patient-form-container">
      <h1>Patient File</h1>
      <form className="patient-form" onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="form-section">
          <div className="form-group">
            <FaHospital className="icon" />
            <input
              type="text"
              name="hospitalId"
              value={formData.hospitalId}
              onChange={handleChange}
              placeholder="Hospital ID"
              aria-label="Hospital ID"
            />
          </div>
        </div>

        {/* Medical Information Section */}
        <div className="form-section">
          <h2>Medical Information</h2>
          <div className="form-group">
            <FaStethoscope className="icon" />
            <input
              type="text"
              name="currentDiagnosis"
              value={formData.currentDiagnosis}
              onChange={handleChange}
              placeholder="Current Diagnosis"
              aria-label="Current Diagnosis"
            />
          </div>
          <div className="form-group">
            <FaStethoscope className="icon" />
            <input
              type="text"
              name="previousDiagnosis"
              value={formData.previousDiagnosis}
              onChange={handleChange}
              placeholder="Previous Diagnosis"
              aria-label="Previous Diagnosis"
            />
          </div>
          <div className="form-group">
            <FaPills className="icon" />
            <input
              type="text"
              name="currentMeds"
              value={formData.currentMeds}
              onChange={handleChange}
              placeholder="Current Meds"
              aria-label="Current Meds"
            />
          </div>
          <div className="form-group">
            <FaPills className="icon" />
            <input
              type="text"
              name="previousMeds"
              value={formData.previousMeds}
              onChange={handleChange}
              placeholder="Previous Meds"
              aria-label="Previous Meds"
            />
          </div>
          <div className="form-group">
            <label>Next Visit
            <DatePicker
              selected={formData.nextVisit}
              onChange={(date) => handleDateChange(date, 'nextVisit')}
              dateFormat="yyyy/MM/dd"
              className="date-picker"
              aria-label="Next Visit"
            /></label>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="form-section">
          <h2>Additional Information</h2>
          <div className="form-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="visits"
              value={formData.visits}
              onChange={handleChange}
              placeholder="Visits"
              aria-label="Visits"
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Save</button>
      </form>
    </div>
  );
};

export default PatientForm;
