import React, { useState } from 'react';
import { FaUserCircle, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block">
      {/* User Icon */}
      <div
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900"
      >
        <FaUserCircle className="text-3xl" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg z-10">
          <nav>
            <ul className="py-1 list-none"> {/* Added list-none to remove bullets */}
              {/* Settings Option */}
              <li>
                <NavLink
                  to="/admin-settings"
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-800 bg-gray-100 hover:bg-blue-600 hover:text-white transition"
                >
                  <FaCog className="mr-2 text-lg" />
                  Settings
                </NavLink>
              </li>
              <li>
                <hr className="my-1 border-gray-200" />
              </li>
              {/* Logout Option */}
              <li>
                <NavLink
                  to="/logout"
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-800 bg-gray-100 hover:bg-blue-600 hover:text-white transition"
                >
                  <FaSignOutAlt className="mr-2 text-lg" />
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
