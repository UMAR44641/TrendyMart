import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SidebarWithHeader from './components/Sidebar';

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  />
        <Route path="/signup"  />
        <Route path="/products"  />
        <Route path="/users"  />
        <Route path="/dashboard"  />
      </Routes>
    </div>
  );
}

export default AllRoute