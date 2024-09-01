import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './PatientsVisitedToday.css';

// Register the components with Chart.js
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);


const PatientsVisitedToday = () => {
  const patients = [
    { id: 1, name: 'John Doe', doctor: 'Dr. Smith', time: '10:00 AM' },
    { id: 2, name: 'Jane Doe', doctor: 'Dr. Johnson', time: '10:30 AM' },
    { id: 3, name: 'Alice Smith', doctor: 'Dr. Brown', time: '11:00 AM' },
    { id: 4, name: 'Bob Johnson', doctor: 'Dr. White', time: '11:30 AM' },
    { id: 5, name: 'Charlie Brown', doctor: 'Dr. Green', time: '12:00 PM' },
    { id: 6, name: 'Daisy Ridley', doctor: 'Dr. Black', time: '12:30 PM' },
    { id: 7, name: 'Ethan Hunt', doctor: 'Dr. Pink', time: '01:00 PM' },
    { id: 8, name: 'Fiona Gallagher', doctor: 'Dr. Grey', time: '01:30 PM' },
    { id: 9, name: 'Gordon Ramsay', doctor: 'Dr. Blue', time: '02:00 PM' },
    { id: 10, name: 'Hermione Granger', doctor: 'Dr. Red', time: '02:30 PM' },
  ];

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Number of Patients',
        data: [12, 19, 14, 15, 10, 18, 12],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="patients-today-container">
      <h1 className="patients-today-title">Patients Visited Today</h1>
      <div className="patients-today-content">
        <table className="patients-today-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Doctor</th>
              <th>Time of Visit</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td onClick={() => navigate('/patient-form')}>{patient.name}</td>
                <td>{patient.doctor}</td>
                <td>{patient.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="patients-today-graphs">
          <Line data={data} options={options} />
          <div className="patients-today-insights">
            <h2>Insights</h2>
            <p>The number of visits has been stable this week with a slight increase on Wednesday.</p>
            <p>Dr. Smith has seen the most patients today.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsVisitedToday;
