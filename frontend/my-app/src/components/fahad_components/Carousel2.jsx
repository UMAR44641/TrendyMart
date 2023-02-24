import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Box,Text,Image, Heading} from "@chakra-ui/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




let data2=[
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/12522871_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Eleven by Venus Williams",
  price:"7,056.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/12608733_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Andrea Lyamah",
  price:"9,611.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/12608611_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Andrea Lyamah",
  price:"26,519.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12406798_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Eleven by Venus Williams",
  price:"7,056.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12442684_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Yaura",
  price:"9,580.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/11825273_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Jessica Rich",
  price:"28,500.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12464674_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"K-Apostrophe",
  price:"32,935.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12603670_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Good American",
  price:"14,186.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12673288_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Modish Decor Pillows",
  price:"4,649.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/12679022_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Good American",
  price:"14,427.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/12673291_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Modish Graham Pillows",
  price:"5,644.00"
 },
 {
  image:"https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/12679026_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
  name:"Good American",
  price:"12,563.00"
 }
]
const Carousel2 =()=> {

   
    return (
     <Box  p={{sm:"30px 15px 0px 15px",base:"20px 15px 0px 15px"}} >
      <Text textAlign="left" fontSize={{md:"2xl",sm:"xl",base:"lg"}} mb="25px" fontWeight={600}>BLACK OWNED AND FOUNDED BRANDS</Text>
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

  export default Carousel2