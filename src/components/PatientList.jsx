import React, { useState } from 'react';
import './PatientList.css';

const PatientList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const patients = [
        { id: '001', name: 'John', surname: 'Doe', contact: '123-456-7890', address: '123 Main St, Cityville', phone: '123-456-7890', nextOfKin: 'Jane Doe', lastVisit: '2024-08-10' },
        { id: '002', name: 'Jane', surname: 'Smith', contact: '987-654-3210', address: '456 Elm St, Townsville', phone: '987-654-3210', nextOfKin: 'John Smith', lastVisit: '2024-08-15' },
        { id: '003', name: 'Michael', surname: 'Brown', contact: '456-789-0123', address: '789 Oak St, Villageville', phone: '456-789-0123', nextOfKin: 'Sarah Brown', lastVisit: '2024-08-12' },
        { id: '004', name: 'Emily', surname: 'Johnson', contact: '321-654-9870', address: '101 Pine St, Hamlet', phone: '321-654-9870', nextOfKin: 'William Johnson', lastVisit: '2024-08-20' },
        { id: '005', name: 'Daniel', surname: 'Williams', contact: '654-321-0987', address: '202 Maple St, Brookside', phone: '654-321-0987', nextOfKin: 'Olivia Williams', lastVisit: '2024-08-22' },
        { id: '006', name: 'Sophia', surname: 'Martinez', contact: '789-012-3456', address: '303 Birch St, Rivertown', phone: '789-012-3456', nextOfKin: 'Lucas Martinez', lastVisit: '2024-08-25' },
        { id: '007', name: 'Jacob', surname: 'Garcia', contact: '890-123-4567', address: '404 Cedar St, Lakeside', phone: '890-123-4567', nextOfKin: 'Mia Garcia', lastVisit: '2024-08-30' },
        { id: '008', name: 'Isabella', surname: 'Hernandez', contact: '901-234-5678', address: '505 Redwood St, Hilltown', phone: '901-234-5678', nextOfKin: 'Ethan Hernandez', lastVisit: '2024-08-28' },
        { id: '009', name: 'Matthew', surname: 'Lopez', contact: '012-345-6789', address: '606 Spruce St, Seaview', phone: '012-345-6789', nextOfKin: 'Ava Lopez', lastVisit: '2024-08-26' },
        { id: '010', name: 'Olivia', surname: 'Wilson', contact: '123-456-7891', address: '707 Willow St, Crestwood', phone: '123-456-7891', nextOfKin: 'Benjamin Wilson', lastVisit: '2024-08-29' },
    
    ];

    const filteredPatients = patients.filter((patient) =>
        patient.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="patient-list-container">
            <h1 className="patient-list-title">Patient Records</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by Patient ID"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search"
                />
            </div>
            <table className="patient-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Next of Kin</th>
                        <th>Last Visit</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPatients.map((patient) => (
                        <tr key={patient.id} className="patient-row">
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.surname}</td>
                            <td>{patient.contact}</td>
                            <td>{patient.address}</td>
                            <td>{patient.phone}</td>
                            <td>{patient.nextOfKin}</td>
                            <td>{patient.lastVisit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientList;
