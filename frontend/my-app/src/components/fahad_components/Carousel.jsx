import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Box,Text,Image, Heading} from "@chakra-ui/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


let data1=[
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12448320_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"SAM",
  price:"22,456.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/11853467_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Rhone",
  price:"10,950.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12424519_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Cinq A Sept",
  price:"25,450.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/12448317_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"SAM",
  price:"29,900.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12549360_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"John Varvatos",
  price:"89,580.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12229684_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"PAIGE",
  price:"8,500.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/11074289_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"SAM",
  price:"24,027.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12206440_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"GEOX",
  price:"4,186.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12545249_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"ALLSAINTS",
  price:"36,649.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/11970292_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Rhone",
  price:"4,027.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/11871570_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Robert Graham",
  price:"10,644.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/11361762_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Neat Method",
  price:"2,563.00"
 }


]


const Carousel =()=> {

   
    return (
     <Box  p="30px 15px 0px 15px" border="1px solid black">
      <Text textAlign="left" fontSize={{md:"2xl",sm:"xl",base:"lg"}} mb="25px" fontWeight={600}>RECOMMENDED FOR YOU</Text>
     <Swiper
     style={{
      "--swiper-navigation-size": "20px",
    }}
       modules={[Navigation, Scrollbar, A11y]}
       navigation={true}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
       loop={true}
       speed={800}
       breakpoints={{
        992:{
          slidesPerView:6,
          slidesPerGroup:6,
          spaceBetween:15
        },
        768:{
          slidesPerView:5,
          slidesPerGroup:5,
          spaceBetween:10
        },
        480:{
          slidesPerView:4,
          slidesPerGroup:4,
          spaceBetween:8
        },
        320:{
          slidesPerView:3,
          slidesPerGroup:3,
          spaceBetween:5
        }
       }}
     >
      {
       data1.map((item)=>{
        return <SwiperSlide>
        <Box  flex="1" bg="white"  m="auto" mb="40px" borderRadius="10px" >
    <Image  w="90%" src={item.image} display="block" m="auto" />
    <Text fontSize={{md:"sm",base:"xs"}} >{item.name}</Text>
    <Text fontSize={{md:"sm",base:"xs"}} color="#464646" fontWeight={600} >Now INR {item.price}</Text>
        </Box>
        </SwiperSlide>
       })
      }
       
       
     </Swiper>
       </Box>
    );
  }

  export default Carousel