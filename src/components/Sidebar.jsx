import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'; // Assuming you have a CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="clinic-logo">
        {/* Add your clinic logo here */}
        <h2>Clinic Logo</h2>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/patients" activeClassName="active">
              Patient List
            </NavLink>
          </li>
          <li>
            <NavLink to="/patient-form" activeClassName="active">
              Create patient file
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/settings" activeClassName="active">
              Settings
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/logout" activeClassName="active">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
