import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Header from './Header';
import Stats from './Stats';
import Chart from './Chart';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      
      <div className="flex-1 flex flex-col bg-gray-50 h-screen">
        <Header />

      
        <div className="p-4 flex-1 overflow-y-auto">
          <Stats />

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Chart />
            <Chart /> 
          </div>

          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
