import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Box, Image } from "@chakra-ui/react";



export default function Slider() {
  return (
    <Box  w="100%"  p="0px 15px"  >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            alt="1"
            src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0221_0222_D_01_CAR_b_FJ_Lagos.jpg?scl=1&fmt=webp&wid=1440"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="2"
            src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0216_0220_D_02_CAR_d_RTW_NewSuits.jpg?scl=1&fmt=webp&wid=1440"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
        
      </Swiper>
    </Box>
  );
}