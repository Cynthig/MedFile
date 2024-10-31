# React + Vite

# Medfile

Medfile is a clinic filing management system designed to streamline patient information handling, appointment scheduling, and secure data management. Built with a user-friendly interface, Medfile serves both administrative staff and doctors, providing role-specific access to improve efficiency in medical record management.

## Features

- **Role-Based Access**: Separate dashboards for Admin and Doctor roles, with distinct permissions for secure data handling.
- **Appointment Scheduling**: Doctors can schedule appointments and update patients, while admin staff can view all scheduled appointments on the calendar.
- **Patient Record Management**: Enables admin staff to input, save, and view patient data, including personal and contact details.
- **Secure Login System**: Authentication system for admins and doctors with role-specific access.
- **Calendar Integration**: Displays all scheduled appointments for streamlined clinic operations.
- **SMS Notifications**: Allows doctors to send appointment information to patients via SMS.

## Project Structure

```plaintext
src/
│
├── assets/
│
├── components/
│   ├── CreatePatient.jsx
│   ├── Dashboard.jsx
│   ├── WebcamCapture.jsx
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── PatientDataHandler.jsx
│   ├── PatientForm.jsx
│   ├── PatientList.jsx
│   ├── Records.jsx
│   ├── SideBar.jsx
│   ├── ProtectedRoute.jsx
│   ├── Calendar.jsx
│
├── models/
│   └── Patient.js
│
├── services/
│   └── facialRecognitionService.js
│
├── utils/
│
├── App.css
├── App.jsx
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/medfile.git
   cd medfile
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Access the app at `http://localhost:3000`.

## Usage

1. **Login**: Choose the role (Admin or Doctor) on the login page and enter the appropriate password.
2. **Admin Role**:
   - View the dashboard with sections like Total Patients, Messages, and Patients Visited Today.
   - Access the calendar for an overview of all appointments.
   - Manage patient records by adding, updating, and viewing details.
3. **Doctor Role**:
   - Schedule appointments and update patient medical conditions.
   - Send SMS notifications to patients with appointment information.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js (for additional integrations)
- **Database**: JSON (with options for expansion)
- **Other Libraries**: Facial recognition (planned), SMS API for notifications

## Future Enhancements

- **Facial Recognition**: Integrate facial recognition for secure logins.
- **Extended Database Support**: Move to a full database solution like MongoDB for data persistence.
- **Enhanced Calendar**: Add drag-and-drop features and advanced filtering.

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
