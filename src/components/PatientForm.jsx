import React, { useState } from 'react';
import { Patient } from '../models/Patient';
import { encrypt } from '../utils/crypto';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaHospital, FaPills, FaNotesMedical, FaAddressCard, FaUserMd, FaStethoscope } from 'react-icons/fa';
import './PatientForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const PatientForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    hospitalId: '',
    currentDiagnosis: '',
    previousDiagnoses: '',
    currentMedications: '',
    allergies: '',
    lastVisitDate: '',
    nextAppointmentDate: '',
    fileNumber: '',
    nextVisit: new Date(),
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

  const handleDateChange = (date, fieldName) => {
    setFormData(prevData => ({ ...prevData, [fieldName]: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="container">
      <h1 className="title"><FaUserMd /> Patient Information</h1>
      <form className="patient-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <FaCalendarAlt className="icon" />
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required />
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
          {/* <div className="form-group">
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
        </div> */}
        </div>

        <button type="submit" className="submit-button">Save Patient Information</button>
      </form>
    </div>
  );
};

export default PatientForm;
