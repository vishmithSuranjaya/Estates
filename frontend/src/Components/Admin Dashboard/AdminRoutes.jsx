import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Dashboard from './Dashboard';
import UserDetails from './UserDetails';
import AdminAds from './AdminAds';

const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route path="/admin" element={<Layout />} />
          <Route path="/admin-users" element={<UserDetails />} />
          <Route path="/admin-ads" element={<AdminAds />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRoutes;
