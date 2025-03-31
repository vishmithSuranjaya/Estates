import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import Sidebar from './Sidebar';
import Header from './Header';
import Stats from './Stats';
import Chart from './Chart';

const Layout = ({ children }) => {
  return (
    <motion.div
      className="flex h-screen"
      initial={{ opacity: 0 }}  // Start with full transparency
      animate={{ opacity: 1 }}  // Fade in to full opacity
      exit={{ opacity: 0 }}  // Ensure it fades out when transitioning away from this layout
      transition={{ duration: 0.5 }} // Fade-in effect with transition duration
    >
      <motion.div 
        className="w-64 h-full"
        initial={{ x: -300 }}  // Sidebar initially off-screen to the left
        animate={{ x: 0 }}  // Slide the sidebar in from the left
        transition={{ type: 'spring', stiffness: 100, damping: 25 }}  // Smooth transition effect
      >
        <Sidebar />
      </motion.div>

      <div className="flex-1 flex flex-col bg-gray-50 h-screen">
        {/* Header with motion animation */}
        <motion.div
          className="sticky top-0 z-10"
          initial={{ y: -50 }}  // Initially move it out of the view at the top
          animate={{ y: 0 }}   // Animate to its original position
          transition={{ type: 'spring', stiffness: 200, damping: 30 }} // Spring effect for smooth movement
        >
          <Header />
        </motion.div>

        {/* Content Section */}
        <div className="p-4 flex-1 overflow-y-auto">
          <Stats />

          {/* Charts Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}  // Start the charts section invisible
            animate={{ opacity: 1 }}  // Fade in when the component appears
            transition={{ delay: 0.5, duration: 0.5 }} // Delay the fade-in for smooth load
          >
            <Chart />
            <Chart />
          </motion.div>

          {/* Children rendered inside Layout */}
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Layout;
