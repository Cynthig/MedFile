import React, { useState } from 'react';
import { FaUser, FaIdCard, FaStethoscope, FaPills, FaHospital, FaPhone, FaUserFriends } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PatientForm.css';
import PatientForm from './PatientForm';

const AdminForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    idNumber: '',
    name: '',
    surname: '',
    middleNames: '',
    physicalAddress: '',
    contact:'',
    dateOfBirth: new Date(),
    emergencyContacts: '',
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
      formData.idNumber,
      formData.name,
      formData.surname,
      formData.middleNames,
      formData.contacts,
      formData.physicalAddress,
      formData.dateOfBirth,
      formData.emergencyContacts,
    );
    onSave(newPatient);
  };

  return (
    <div className="patient-form-container">
      <h1>Patient File</h1>
      <form className="patient-form" onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-group">
            <FaIdCard className="icon" />
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="ID"
              aria-label="ID"
            />
            {formErrors.id && <span className="error-text">{formErrors.id}</span>}
          </div>
          <div className="form-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              aria-label="Name"
            />
            {formErrors.name && <span className="error-text">{formErrors.name}</span>}
          </div>
          <div className="form-group">
            <FaUserFriends className="icon" />
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Surname"
              aria-label="Surname"
            />
            {formErrors.surname && <span className="error-text">{formErrors.surname}</span>}
          </div>
          <div className="form-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="middleNames"
              value={formData.middleNames}
              onChange={handleChange}
              placeholder="Middle Names"
              aria-label="Middle Names"
            />
          </div>
          <div className="form-group">
            <FaHospital className="icon" />
            <input
              type="text-area"
              name="Physical Address"
              value={formData.physicalAddress}
              onChange={handleChange}
              placeholder="Physical Address"
              aria-label="Physical Address"
            />
          </div>
          <div className="form-group">
            <FaPhone className="icon" />
            <input
              type="text"
              name="Contacts"
              value={formData.contacts}
              onChange={handleChange}
              placeholder="Contacts"
              aria-label="Contacts"
            />
          </div>
          <div className="form-group">
            <label>Date of Birth
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={(date) => handleDateChange(date, 'dateOfBirth')}
              dateFormat="yyyy/MM/dd"
              className="date-picker"
              aria-label="Date of Birth"
            /></label>
          </div>
          <div className="form-group">
            <FaUserFriends className="icon" />
            <input
              type="text"
              name="nextOfKin"
              value={formData.nextOfKin}
              onChange={handleChange}
              placeholder="Next of Kin"
              aria-label="Next of Kin"
            />
          </div>
          <div className="form-group">
            <FaPhone className="icon" />
            <input
              type="text"
              name="emergencyContacts"
              value={formData.emergencyContacts}
              onChange={handleChange}
              placeholder="Emergency Contacts"
              aria-label="Emergency Contacts"
            />
          </div>
          </div>
        <button type="submit" className="submit-btn">Save</button>
      </form>
    </div>
  );
};

export default AdminForm;
