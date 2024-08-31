// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Sidebar = ({ userRole }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDrag = (e) => {
    const sidebar = document.querySelector('.sidebar');
    const newWidth = Math.min(Math.max(e.clientX, 150), 400);
    sidebar.style.width = `${newWidth}px`;
  };

  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="clinic-logo">
          <h2>Clinic Logo</h2>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <NavLink to="/dashboard" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
            {userRole === 'Doctor' && (
              <li>
                <NavLink to="/calendar" activeClassName="active">
                  Calendar
                </NavLink>
              </li>
            )}
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
            <li>
              <NavLink to="/logout" activeClassName="active">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className="drag-handle"
          onMouseDown={(e) => {
            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('mouseup', () => {
              document.removeEventListener('mousemove', handleDrag);
            });
          }}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '10px',
            cursor: 'ew-resize',
            zIndex: 1001,
          }}
        />
      </div>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar} style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1002 }}>
        <span className="icon">{isOpen ? '✖️' : '☰'}</span>
      </button>
    </div>
  );
};

export default Sidebar;
