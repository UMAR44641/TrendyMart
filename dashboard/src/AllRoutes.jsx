import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute"

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" />
        <Route path="/" />
        <Route path="/products" element={<PrivateRoute></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default AllRoute