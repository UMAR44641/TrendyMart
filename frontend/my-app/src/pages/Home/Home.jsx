import React from 'react'
import Slider from '../../components/fahad_components/Slider';
import Carousel from '../../components/fahad_components/Carousel';
import Carousel2 from '../../components/fahad_components/Carousel2';
import Carousel3 from '../../components/fahad_components/Carousel3';
import {Flex,Box,Heading,Image,Text} from "@chakra-ui/react";


const Home = () => {
  return (
    <div>
     <Slider/>
     <Carousel heading="recommended" />
     <Flex  p={{sm:"30px 15px",base:"0px 15px"}} justifyContent="space-between">
      <Box w="49%"  >
          <Image w="100%"  src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0215_D_02a_TB_RTW_ALC.jpg?scl=1&fmt=webp&wid=720" alt="no" ></Image>
      </Box>
      <Box w="49%" >
      <Image w="100%"  src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0215_D_02b_TB_MULTI_RagNBone.jpg?scl=1&fmt=webp&wid=720" alt="no" ></Image>
      </Box>
     </Flex>
     <Box pt="25px">
      <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0215_D_03_MULTI_FeaturedShops.jpg?scl=1&fmt=webp&wid=1440" />
     </Box>
     <Carousel2/>
     <Box p="0px 15px" pt={{sm:"25px",base:"0px"}} >
      <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0215_D_05_MULTI_Essentials.jpg?scl=1&fmt=webp&wid=1440" />
     </Box>
     <Carousel3/>
    
    </div>
  )
}

export default Home