import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientList.css'; // New CSS file for PatientList styling

const PatientList = ({ patients }) => {
    const navigate = useNavigate();

    return (
        <div className="patient-list-container">
            <h1 className="patient-list-title">Patients</h1>
            <div className="patient-list-content">
                <ul className="patient-list" onClick={() => navigate('/patient-form')}>
                    {patients.map((patient) => (
                        <li key={patient.id} className="patient-list-item">
                            {patient.name} {patient.surname}
                        </li>
                    ))}
                </ul>
                {/* <button className="create-patient-button" onClick={() => navigate('/create-patient')}>
                    Create a New File
                </button> */}
            </div>
        </div>
    );
};

export default PatientList;
