import React from 'react';
import { motion } from 'framer-motion';
import UserDropdown from './UserDropdown';

const Header = () => {
  return (
    <motion.div
      className="bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center"
      initial={{ opacity: 0 }}  // Initially transparent
      animate={{ opacity: 1 }}   // Animate to full opacity
      transition={{ duration: 0.5 }} // Set the duration of the animation
    >
      <motion.h1 
        className="text-xl font-bold"
        initial={{ x: -100 }}  // Start from left off-screen
        animate={{ x: 0 }}     // Animate to original position
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Estates
      </motion.h1>

      {/* Add UserDropdown */}
      <motion.div
        initial={{ opacity: 0 }}  // Start transparent
        animate={{ opacity: 1 }}   // Animate to full opacity
        transition={{ delay: 0.2 }}  // Slight delay to appear after the text animation
      >
        <UserDropdown />
      </motion.div>
    </motion.div>
  );
};

export default Header;
