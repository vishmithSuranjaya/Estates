import React from 'react';
import UserDropdown from './UserDropdown';

const Header = () => {
  return (
    <div className="bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center">
      <h1>Estates</h1>
      {/* Add UserDropdown */}
      <UserDropdown />
    </div>
  );
};

export default Header;
