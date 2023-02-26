import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';

const PrivateRoute = ({children}) => {
 const {isAuth}=useSelector((store)=>{
  return store.auth
 });
 const toast=useToast();
 const {pathname}=useLocation()
 if(isAuth){
return children;
 }else{
  toast({
   title: 'Login First.',
   description: "Please login first.",
   status: 'warning',
   duration: 3000,
   isClosable: true,
   position:"top"
 });
  return <Navigate to="/"
  state={{from:pathname}}
  replace
  />
 }
}

export default PrivateRoute