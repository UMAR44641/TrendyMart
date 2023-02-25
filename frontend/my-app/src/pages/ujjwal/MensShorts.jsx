import React, { useEffect, useState } from "react";
import MensProductCard from "../../components/ujjwal/MensProductCard";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import SideBar from "../../components/ujjwal/SideBar";
import { useLocation, useSearchParams } from "react-router-dom";
import { BsFillFilterSquareFill } from "react-icons/bs";

const MensShorts = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  // console.log("locayion", location.search);
  const [data, setdata] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  const order = searchParams.getAll("order")[0];

  const getData = (params) => {
    axios
      .get("https://courageous-tuxedo-dog.cyclic.app/products", params)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      });
  };
//useeffect for rerendering
  useEffect(() => {
    const price = searchParams.getAll("price")[0];
    const paramObj = {
      params: {
        category: searchParams.getAll("category"),
        _sort: order && "price",
        _order: order,
        maxprice:price
      },
    };
    getData(paramObj);
  }, [location.search]);

  // console.log(data);
  // position: fixed;
  // bottom: 0;
  // right: 0;
  // width: 300px;
  return (
    <div style={{ display: "flex"}}>
      <div style={{position:"relative",width:"20%"}}>
        <Box display={{ base: "block", lg: "flex" }} position="sticky" top="0px" left="20px" width="100%">
        <Box flex={0.3} display={{ base: "none", lg: "block" }} width="100%">
          <SideBar />
        </Box>
      </Box>
      <Box pl="20px" display={{ base: "flex", lg: "none"}} marginTop="20px"position="sticky" width="100px" top="0px" left="20px">
        <BsFillFilterSquareFill
          onClick={onOpen}
          fontSize={20}
          color="#E40046"
          
        />
        <Text
          onClick={onOpen}
          cursor="pointer"
          fontSize="20px"
          fontWeight="bold"
          ml="7px"
        >
          Filter
        </Text>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Filter</DrawerHeader>
            <DrawerBody>
              {" "}
              <SideBar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      </div>
      
      <div
        style={{
          width: "80%",
          padding: "10px",
          margin: "5px",
          border: "1px solid balck",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <div>WOMEN'S CLOTHING (1-60 of 846 Items)</div>
          <div style={{ display: "flex" }}>
            <div>
              <label style={{ fontWeight: "bolder" }}>Sort By:</label>
              <select name="cars" id="cars">
                <option value="volvo">Featured</option>
                <option value="saab">New Arrival</option>
                <option value="mercedes">Best Sellers</option>
                <option value="audi">Price(high-low)</option>
                <option value="audi">Price(low-high)</option>
              </select>
            </div>
            <div>
              <label style={{ fontWeight: "bolder" }}>Page:</label>
              <select name="cars" id="cars">
                <option value="volvo">Featured</option>
                <option value="saab">New Arrival</option>
                <option value="mercedes">Best Sellers</option>
                <option value="audi">Price(high-low)</option>
                <option value="audi">Price(low-high)</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Grid
            templateColumns={{
              base: `repeat(1,1fr)`,
              sm: `repeat(2,1fr)`,
              md: `repeat(3,1fr)`,
              lg: `repeat(4,1fr)`,
            }}
            margin={"auto"}
            gap={6}
          >
            {data?.map((el) => (
              <MensProductCard key={el.id} {...el} />
            ))}
          </Grid>
        </div>
      </div> 
    </div>
  );
};

export default MensShorts;
