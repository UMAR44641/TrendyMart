import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Box,Text,Image, Heading} from "@chakra-ui/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




let data2=[
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12448320_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"SAM",
  price:"22,456.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/12448317_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Benetton",
  price:"29,911.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/10780552_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Joe's Jeans",
  price:"2,519.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12334479_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Aqua",
  price:"6,056.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12448348_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Yaura",
  price:"39,580.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12206440_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Geox Rich",
  price:"8,500.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/12446946_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"US Polo",
  price:"33,935.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/12448371_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"American Goods",
  price:"44,186.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12301730_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"DL1961",
  price:"4,249.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/12639717_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Aqua",
  price:"5,427.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/11973681_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Aqua",
  price:"4,344.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/9378078_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Gund",
  price:"1,563.00"
 }
]
const Carousel3 =()=> {

   
    return (
     <Box  p={{sm:"30px 15px 0px 15px",base:"20px 15px 0px 15px"}}>
      <Text textAlign="left"  fontSize={{md:"2xl",sm:"xl",base:"lg"}} mb="25px" fontWeight={600}>KIDS CLOTHING</Text>
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
          slidesPerView:2,
          slidesPerGroup:2,
          spaceBetween:5
        }
       }}
     >
      {
       data2.map((item)=>{
        return <SwiperSlide key={item.image}>
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

  export default Carousel3