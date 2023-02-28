import { Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CheckoutSuccess = () => {
  const navigate=useNavigate();
  const loginData=JSON.parse(localStorage.getItem("loginData"));
  const user_id=loginData?loginData.id:"";

  useEffect(()=>{
setTimeout(()=>{
navigate("/");
},3000);

axios.post(`https://courageous-tuxedo-dog.cyclic.app/orders/upload/${user_id}`).then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log(err.message)
      });  
  },[])
  return (
    <div>
      <Heading>Your Payment was successfull!</Heading>
      <Image h="300px"  m="auto" src="https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif" alt="ima"/>
    </div>
  )
}

export default CheckoutSuccess