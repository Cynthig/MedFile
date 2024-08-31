import React, { useState } from 'react';
import { Patient } from '../models/Patient';
import { encrypt } from '../utils/crypto';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaHospital, FaPills, FaNotesMedical, FaAddressCard, FaUserMd } from 'react-icons/fa';
import './PatientForm.css';

const PatientForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    surname: '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
    email: '',
    address: '',
    hospitalId: '',
    currentDiagnosis: '',
    previousDiagnoses: '',
    currentMedications: '',
    allergies: '',
    lastVisitDate: '',
    nextAppointmentDate: '',
    fileNumber: '',
    nextOfKin: {
      name: '',
      relationship: '',
      contactNumber: '',
    },
    emergencyContact: {
      name: '',
      relationship: '',
      contactNumber: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prevData => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encryptedHospitalId = encrypt(formData.hospitalId);
    const newPatient = new Patient({
      ...formData,
      hospitalId: encryptedHospitalId,
    });
    onSave(newPatient);
  };

  return (
    <div className="container">
      <h1 className="title"><FaUserMd /> Patient Information</h1>
      <form className="patient-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="Patient ID" required />
          </div>
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="First Name" required />
          </div>
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <FaCalendarAlt className="icon" />
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required />
          </div>
          <div className="form-group">
            <FaUser className="icon" />
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <FaPhone className="icon" />
            <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
          </div>
          <div className="form-group">
            <FaEnvelope className="icon" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          </div>
          <div className="form-group">
            <FaAddressCard className="icon" />
            <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
          </div>
        </div>

        <div className="form-section">
          <h2>Medical Information</h2>
          <div className="form-group">
            <FaHospital className="icon" />
            <input type="text" name="hospitalId" value={formData.hospitalId} onChange={handleChange} placeholder="Hospital ID" required />
          </div>
          <div className="form-group">
            <FaNotesMedical className="icon" />
            <textarea name="currentDiagnosis" value={formData.currentDiagnosis} onChange={handleChange} placeholder="Current Diagnosis" />
          </div>
          <div className="form-group">
            <FaNotesMedical className="icon" />
            <textarea name="previousDiagnoses" value={formData.previousDiagnoses} onChange={handleChange} placeholder="Previous Diagnoses" />
          </div>
          <div className="form-group">
            <FaPills className="icon" />
            <textarea name="currentMedications" value={formData.currentMedications} onChange={handleChange} placeholder="Current Medications" />
          </div>
          <div className="form-group">
            <FaPills className="icon" />
            <textarea name="allergies" value={formData.allergies} onChange={handleChange} placeholder="Allergies" />
          </div>
          <div className="form-group">
            <FaCalendarAlt className="icon" />
            <input type="date" name="lastVisitDate" value={formData.lastVisitDate} onChange={handleChange} placeholder="Last Visit Date" />
          </div>
          <div className="form-group">
            <FaCalendarAlt className="icon" />
            <input type="date" name="nextAppointmentDate" value={formData.nextAppointmentDate} onChange={handleChange} placeholder="Next Appointment Date" />
          </div>
          <div className="form-group">
            <FaAddressCard className="icon" />
            <input type="text" name="fileNumber" value={formData.fileNumber} onChange={handleChange} placeholder="File Number" />
          </div>
        </div>

        <div className="form-section">
          <h2>Emergency Contacts</h2>
          <h3>Next of Kin</h3>
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" name="nextOfKin.name" value={formData.nextOfKin.name} onChange={handleChange} placeholder="Name" />
          </div>
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" name="nextOfKin.relationship" value={formData.nextOfKin.relationship} onChange={handleChange} placeholder="Relationship" />
          </div>
          <div className="form-group">
            <FaPhone className="icon" />
            <input type="tel" name="nextOfKin.contactNumber" value={formData.nextOfKin.contactNumber} onChange={handleChange} placeholder="Contact Number" />
          </div>

          <h3>Emergency Contact</h3>
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" name="emergencyContact.name" value={formData.emergencyContact.name} onChange={handleChange} placeholder="Name" />
          </div>
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" name="emergencyContact.relationship" value={formData.emergencyContact.relationship} onChange={handleChange} placeholder="Relationship" />
          </div>
          <div className="form-group">
            <FaPhone className="icon" />
            <input type="tel" name="emergencyContact.contactNumber" value={formData.emergencyContact.contactNumber} onChange={handleChange} placeholder="Contact Number" />
          </div>
        </div>

        <button type="submit" className="submit-button">Save Patient Information</button>
      </form>
    </div>
  );
};

export default PatientForm;
