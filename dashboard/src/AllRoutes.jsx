import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SidebarWithHeader from './components/Sidebar';

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SidebarWithHeader />} />
        <Route path="/products" element={<SidebarWithHeader />} />
        <Route path="/users" element={<SidebarWithHeader />} />
        <Route path="/login" element={<SidebarWithHeader />} />
      </Routes>
    </div>
  );
}

export default AllRoute