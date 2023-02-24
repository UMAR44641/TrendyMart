import React from 'react';
import {Box,Flex,Heading,Image,Text,Input,InputGroup, InputLeftElement} from "@chakra-ui/react";
import India from "../../images/india-logo.png"
import {SearchIcon} from "@chakra-ui/icons"
import {FaShoppingCart} from "react-icons/fa"
import "./Navbar.css"
import {HamburgerIcon} from "@chakra-ui/icons";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';

import LoginModal from './Login/LoginModal';
import Signup from './Login/Signup/Signup';



const data=[
  "Men","Women","Kids","Jewelery","Handbags","Shoes","Home","Sale","Designers","Editorial","Gifts"
]

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOn,setIsOn]=React.useState(false);
  const [register,setRegister]=React.useState(false);

 const openRegister=()=>{
  setRegister(true)
 }

 const closeRegister=()=>{
  setRegister(false)
 }

  const getOn=()=>{
    setIsOn(true)
  }

  const getOff=()=>{
    setIsOn(false)
  }

  return (
    <Box position="sticky" top={0} bgColor="white" mb="15px"  zIndex="50">
      <Flex display={{lg:"flex",base:"none"}} justifyContent="flex-end" border="1px solid #E6E6E6" padding="0px 15px" >
        <Box p="7px 0px" cursor="pointer" _hover={{borderBottom:"2px solid black"}} >
          <Box borderRight="1px solid #E6E6E6" p="0px 10px">
          <Text fontSize="sm">Stores & Events</Text>
          </Box>
        </Box>

        <Box p="7px 0px" cursor="pointer" _hover={{borderBottom:"2px solid black"}} >
          <Box borderRight="1px solid #E6E6E6" p="0px 10px">
          <Text fontSize="sm">Shopping Services</Text>
          </Box>
        </Box>

        <Box p="7px 0px" cursor="pointer" _hover={{borderBottom:"2px solid black"}}  >
          <Box  p="0px 0px 0px 10px" display="flex" alignItems="center" >
          <Image src={India} alt="India" boxSize="16px" mr="4px" />
          <Text fontSize="sm" >INR</Text>
          </Box>
        </Box>
      </Flex>

      <Flex   padding={{sm:"10px 15px 10px 15px",base:"10px 15px 0px 15px"}}  >
        <Box  justifyContent="flex-start" alignItems="center" fontSize={{md:"25px",sm:"18px",base:"14px"}} flex="0.1" display={{base:"flex",lg:"none"}}>
          <HamburgerIcon onClick={onOpen} />
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerCloseButton/>
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
          <Heading textAlign="center" size="md" fontFamily="Brush Script MT, Brush Script Std, cursive;">TrendyMart</Heading>
          </DrawerHeader>
          <DrawerBody>
            {
              data.map((e)=>{
                return <Text mt="20px"  >{e}</Text>
              })
            }
          </DrawerBody>
          <DrawerFooter borderTopWidth='1px'>
            <Box  w="100%">
            <Text>Stores & Events</Text>
            <Text>Shopping Services</Text>
            </Box>
        
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </Box>

        <Box  flex={{lg:"0.5",base:"1"}} display="flex" justifyContent="flex-start" alignItems="center"  >
          <Heading size={{md:"lg",sm:"md",base:"sm"}} fontFamily="Brush Script MT, Brush Script Std, cursive;">TrendyMart</Heading>
        </Box>
        <Box  flex="1" display={{lg:"flex",base:"none"}} justifyContent="flex-end" alignItems="flex-end" pr="15px"
         >
        <InputGroup w="300px" size="sm">
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon/>}
    />
    <Input type='text' placeholder='Search' variant="flushed" borderBottom="1px solid black" focusBorderColor='1px solid black' />
  </InputGroup>
        </Box>

        <Box flex={{lg:"0.18",base:"0.15"}} cursor="pointer"  _hover={{borderBottom:"2px solid black"}} display="flex" alignItems="center" justifyContent={{lg:"center",base:"flex-end"}} onClick={getOn} >
          <Text  fontSize={{md:"lg",sm:"md",base:"sm"}} fontWeight={600}>Login/Signup</Text>
        </Box>
        <LoginModal isOn={isOn} getOn={getOn} getOff={getOff} register={register} openRegister={openRegister} closeRegister={closeRegister} />
        <Signup register={register} openRegister={openRegister} closeRegister={closeRegister} />

        <Box flex={{lg:"0.05",base:"0.1"}}  display="flex" alignItems="center" justifyContent={{lg:"center",base:"flex-end"}}>
        <FaShoppingCart cursor="pointer" fontSize="22px"/>
        </Box>
      </Flex>

      <div className='dropdown' >
        <Flex padding="0px 15px " borderBottom="1px solid #E6E6E6" justifyContent="space-between">
        { data.map((ele)=>{
      return <Box onMouseEnter={()=>{
        document.querySelector(".dropdown-content").style.display="flex"
      }} cursor="pointer" pb="7px" _hover={{borderBottom:"2px solid black"}} onMouseLeave={()=>{
        document.querySelector(".dropdown-content").style.display="none"
      }} >
      <Text fontWeight={600}  >{ele}</Text>
    </Box>
     })}
        </Flex>
  
     <div className='dropdown-content' onMouseEnter={()=>{
        document.querySelector(".dropdown-content").style.display="flex"
      }} onMouseLeave={()=>{
        document.querySelector(".dropdown-content").style.display="none"
      }} >
     <Box flex="1">
              <Text fontWeight={600} mb="10px" textAlign="left">Clothing</Text>
       {    ["Active & Workout","Blazers","Cashmere","Coats & Jackets","Dresses","Jeans & Denim","Jumpsuits & Rompers", "Lingerie & Hosirie & Shapewear", "Loungewear", "Maternity","Pants & Jeans", "Shorts & Skirts", "Sleepwears", "Sweaters","Swimsuits & Robes","Tops"].map((ele)=>{
        return <Text cursor="pointer" _hover={{color:"#D90EAC"}} mb="10px" textAlign="left" fontSize="xs">{ele}</Text>
       })}
            </Box>
            <Box flex="1">
              <Box>
              <Text fontWeight={600} mb="10px" textAlign="left">Dresses</Text>
                {["Shop All","Best Sellers","Evening & Formal Gowns","Cocktail", "Casual","Party","Prom Dresses & Gowns", "Wear to Work"].map((ele)=>{
        return <Text cursor="pointer" _hover={{color:"#D90EAC"}} mb="10px" textAlign="left" fontSize="xs">{ele}</Text>
       })}
              </Box>
              <Box mt="20px">
              <Text fontWeight={600} mb="10px" textAlign="left">Active & Workout</Text>
                {["Shop All","Activewear Sets","Leggings","Tops & Teas", "Aloyoga"].map((ele)=>{
        return <Text cursor="pointer" _hover={{color:"#D90EAC"}} mb="10px" textAlign="left" fontSize="xs">{ele}</Text>
       })}
              </Box>
            </Box>
            <Box flex="1">
            <Box>
              <Text fontWeight={600} mb="10px" textAlign="left">What to Wear For</Text>
                {["Going Out","Hitting the Slopes","The Office","Vacation", "Wedding Season","Weekend"].map((ele)=>{
        return <Text cursor="pointer" _hover={{color:"#D90EAC"}} mb="10px" textAlign="left" fontSize="xs">{ele}</Text>
       })}
              </Box>
              <Box mt="20px">
              <Text fontWeight={600} mb="10px" textAlign="left">New and Noteworthy</Text>
                {["New Arrivals","Best Sellers","Most Wanted Styles","New Farm: Rio", "Sprig Trends","150th Anniversary Exclusives"].map((ele)=>{
        return <Text cursor="pointer" _hover={{color:"#D90EAC"}} mb="10px" textAlign="left" fontSize="xs">{ele}</Text>
       })}
              </Box>
            </Box>
            <Box flex="1">
            <Box>
              <Text fontWeight={600} mb="10px" textAlign="left">Featured Designers</Text>
                {["Shop All","Alice + Olivia","Aqua","Maje", "Mother","Theory"].map((ele)=>{
        return <Text cursor="pointer" _hover={{color:"#D90EAC"}} mb="10px" textAlign="left" fontSize="xs">{ele}</Text>
       })}
              </Box>
              <Box mt="20px">
              <Text fontWeight={600} mb="10px" textAlign="left">Sales and Clearance</Text>
                {["Shop All","Coats","Dresses","Sweaters", "Tops"].map((ele)=>{
        return <Text cursor="pointer" _hover={{color:"#D90EAC"}} mb="10px" textAlign="left" fontSize="xs">{ele}</Text>
       })}
              </Box>
            </Box>
            <Box flex="1">
              <Image  src="https://assets.bloomingdalesassets.com/hnfwgl/dyn_img/cat_splash/2023_02WK2_SITE_RTW_FlyoutLP_FLYOUT_YL_JH_1675353826947.png" alt="image" />
            
            </Box>
     </div>
      </div>

      <Box p="0px 15px"  display={{lg:"none",base:"block"}}  >
      <InputGroup w="100%" size="sm">
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon/>}
    />
    <Input type='text' placeholder='Search' variant="flushed" borderBottom="1px solid black" focusBorderColor='1px solid black' />
  </InputGroup>
      </Box>
    </Box>
  )
}

export default Navbar