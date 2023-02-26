import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './Home/Home';
import MensShorts from './ujjwal/MensShorts';
import SingleProduct from './ujjwal/SingleProduct';

const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/products/:_id" element={<SingleProduct/>}></Route>
     <Route path="/products" element={<MensShorts/>}></Route>
    </Routes>
  )
}

export default AllRoutes