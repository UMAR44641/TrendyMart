import { Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckoutSuccess = () => {
  const navigate=useNavigate();
  useEffect(()=>{
setTimeout(()=>{
navigate("/");
},3000)
  },[])
  return (
    <div>
      <Heading>Your Payment was successfull!</Heading>
      <Image h="300px"  m="auto" src="https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif" alt="ima"/>
    </div>
  )
}

export default CheckoutSuccess