import React from 'react';
import {Box,Heading,Text,Flex} from "@chakra-ui/react";
import {BsPinterest} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'


const Footer = () => {
  return (<>
    <Box p="25px 15px" bgColor="#F8F8F8" >
      <Flex display={{md:"flex",base:"none"}} >
        <Box flex="1" textAlign="left">
          <Text fontWeight={600} mb="10px">CUSTOMER SERVICE</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">1-800-777-0000</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">FAQs & Help</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Visitor Services</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Domestic Site FAQs</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Shipping to India Go to US site</Text>
        </Box>
        <Box flex="1" textAlign="left">
        <Text fontWeight={600} mb="10px">YOUR ORDER</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Order Status & History</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Shipping Policy</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Returns & Exchanges</Text>

        </Box>
        <Box flex="1" textAlign="left" >
        <Text fontWeight={600} mb="10px">ABOUT TRENDYMART</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">About Us</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Be the Change</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Careers</Text>
        
        </Box>
        <Box flex="1" textAlign="left">
        <Text fontWeight={600} mb="10px">Follow Us</Text>
        <Box display="flex">
<BsPinterest fontSize="22px" style={{marginRight:"8px",cursor:"pointer"}}/>
<AiFillInstagram fontSize="22px" style={{marginRight:"8px",cursor:"pointer"}}/>
<AiFillFacebook fontSize="22px" style={{marginRight:"8px",cursor:"pointer"}}/>
<AiFillTwitterSquare fontSize="22px" style={{marginRight:"8px",cursor:"pointer"}}/>
        </Box>
        </Box>
      </Flex>
      <Box display={{md:"none",base:"block"}} >
      <Accordion  allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontWeight={600} fontSize="sm" >CUSTOMER SERVICE</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
    <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">1-800-777-0000</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">FAQs & Help</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Visitor Services</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Domestic Site FAQs</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Shipping to India Go to US site</Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontWeight={600} fontSize="sm" >YOUR ORDER</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel textAlign="left" pb={4}>
    <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Order Status & History</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Shipping Policy</Text>
          <Text cursor="pointer" _hover={{textDecoration:"underline"}}  fontSize="sm" mb="10px">Returns & Exchanges</Text>

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontWeight={600} fontSize="sm" >ABOUT TRENDYMART</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </Box>
    </Box>
    <Box p="30px 0px">
        <Text mb="10px" fontSize="sm">Terms of Use  &nbsp;|&nbsp;  Privacy  &nbsp;|&nbsp;  Cookie Preferences  &nbsp;|&nbsp;  Do not sell or share my personal information  &nbsp;|&nbsp;  CA Privacy Rights</Text>
        <Text mb="10px" fontSize="sm">CA Transperency in Supply Chains Act  &nbsp;|&nbsp;  Internet Based Ads  &nbsp;|&nbsp;  Product Recalls  &nbsp;|&nbsp;  Customer Bill of Rights  &nbsp;|&nbsp;  Pricing Policy</Text>
        <Text mb="10px" fontSize="sm">Essential Accessibility</Text>
        <Text fontSize="sm">© 2023 Bloomingdale's. 1000 Third Avenue New York, NY 10022. Request our corporate name and address.</Text>
        
       
      </Box>
    </>
  )
}

export default Footer