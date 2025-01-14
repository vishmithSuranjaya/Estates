import React from 'react';
import { FaBox, FaCog, FaTachometerAlt, FaUser, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <Navbar className="flex-column align-items-start">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          </div>
          <Nav className="flex-column mt-4 w-100">
           
            <Nav.Link
              as={NavLink}
              to="/admin"
              className="d-flex align-items-center px-3 py-3 my-1 text-white hover:bg-gray-700 rounded"
            >
              <FaTachometerAlt className="me-2 text-lg" />
              Dashboard
            </Nav.Link>

            

           
            <Nav.Link
              as={NavLink}
              to="/admin-users"
              className="d-flex align-items-center px-3 py-3 my-1 text-white hover:bg-gray-700 rounded"
            >
              <FaUser className="me-2 text-lg" />
              Users
            </Nav.Link>

           
            <Nav.Link
              as={NavLink}
              to="/admin-ads"
              className="d-flex align-items-center px-3 py-3 my-1 text-white hover:bg-gray-700 rounded"
            >
              <FaBox className="me-2 text-lg" />
              Advertisements
            </Nav.Link>

            
            <Nav.Link
              as={NavLink}
              to="/admin-settings"
              className="d-flex align-items-center px-3 py-3 my-1 text-white hover:bg-gray-700 rounded"
            >
              <FaCog className="me-2 text-lg" />
              Settings
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>

     
      <div className="mb-4">
        <Nav.Link
          as={NavLink}
          to="/logout"
          className="d-flex align-items-center px-3 py-3 my-1 text-white hover:bg-gray-700 rounded"
        >
          <FaSignOutAlt className="me-2 text-lg" />
          Logout
        </Nav.Link>
      </div>
    </div>
  );
};

export default Sidebar;
