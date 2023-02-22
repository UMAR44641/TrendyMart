import React from 'react';
import {Box,Flex,Heading,Image,Text} from "@chakra-ui/react";
import India from "../../images/india-logo.png"
import logo from "../../images/trendymartlogo.gif"

const Navbar = () => {
  return (
    <Box>
      <Flex justifyContent="flex-end" border="1px solid #E6E6E6" >
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
          <Box  p="0px 10px" display="flex" alignItems="center" >
          <Image src={India} alt="India" boxSize="16px" mr="4px" />
          <Text fontSize="sm" >INR</Text>
          </Box>
        </Box>
      </Flex>

      <Flex  padding="15px 15px">
        <Box>
          <Heading size="lg" fontFamily="Brush Script MT, Brush Script Std, cursive;">TrendyMart</Heading>
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Flex>
    </Box>
  )
}

export default Navbar