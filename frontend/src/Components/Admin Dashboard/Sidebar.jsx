import React from 'react';
import { FaBox, FaCog, FaTachometerAlt, FaUser, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <motion.div
      className="w-64 h-screen bg-gray-800 text-white flex flex-col justify-between"
      initial={{ x: '-100%' }}  // Initial position off-screen
      animate={{ x: 0 }}  // Animate to on-screen
      exit={{ x: '-100%' }}  // Slide out off-screen when exiting
      transition={{ type: 'slide', stiffness: 80 }}
    >
      {/* Top Section */}
      <div>
        <Navbar className="flex-column align-items-start">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          </div>
          <Nav className="flex-column mt-4 w-100">

            <motion.div
              whileHover={{ scale: 1.05 }}  // Hover effect to scale item
            >
              <Nav.Link
                as={NavLink}
                to="/admin"
                className="d-flex align-items-center px-3 py-3 my-1 text-white hover:bg-gray-700 rounded"
              >
                <FaTachometerAlt className="me-2 text-lg" />
                Dashboard
              </Nav.Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Nav.Link
                as={NavLink}
                to="/admin-users"
                className="d-flex align-items-center px-3 py-3 my-1 text-white hover:bg-gray-700 rounded"
              >
                <FaUser className="me-2 text-lg" />
                Users
              </Nav.Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Nav.Link
                as={NavLink}
                to="/admin-ads"
                className="d-flex align-items-center px-3 py-3 my-1 text-white hover:bg-gray-700 rounded"
              >
                <FaBox className="me-2 text-lg" />
                Property Ads
              </Nav.Link>
            </motion.div>

            {/* <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Nav.Link
                as={NavLink}
                to="/admin-settings"
                className="d-flex align-items-center px-3 py-3 my-1 text-white hover:bg-gray-700 rounded"
              >
                <FaCog className="me-2 text-lg" />
                Settings
              </Nav.Link>
            </motion.div> */}
          </Nav>
        </Navbar>
      </div>

      {/* Bottom Logout Button */}
      <div className="mb-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
        >
          <Nav.Link
            as={NavLink}
            to="/login"
            className="d-flex align-items-center px-3 py-3 my-1 text-white hover:bg-gray-700 rounded"
          >
            <FaSignOutAlt className="me-2 text-lg" />
            Logout
          </Nav.Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
