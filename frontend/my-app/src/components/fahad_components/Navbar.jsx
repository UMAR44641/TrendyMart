import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import India from "../../images/india-logo.png";
import { SearchIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth.action";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import LoginModal from "./Login/LoginModal";
import Signup from "./Login/Signup/Signup";

const data = [
  "Men",
  "Women",
  "Kids",
  "Jewelery",
  "Handbags",
  "Shoes",
  "Home",
  "Sale",
  "Designers",
  "Editorial",
  "Gifts",
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOn, setIsOn] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    fetch("https://courageous-tuxedo-dog.cyclic.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // console.log(products);
    setFilteredProducts(
      products.filter((product) =>
        product.desc.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  useEffect(() => {
    setSearchTerm("");
  }, [location.pathname]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  // =================================================================================
  const { isAuth } = useSelector((store) => {
    return store.auth;
  });
  const dispatch = useDispatch();
  let loginData = JSON.parse(localStorage.getItem("loginData")) || "";
  let name = loginData ? loginData.name : "";
  const openRegister = () => {
    setRegister(true);
  };

  const closeRegister = () => {
    setRegister(false);
  };

  const getOn = () => {
    setIsOn(true);
  };

  const getOff = () => {
    setIsOn(false);
  };

  return (
    <Box position="sticky" top={0} bgColor="white" mb="15px" zIndex="50">
      <Flex
        display={{ lg: "flex", base: "none" }}
        justifyContent="flex-end"
        border="1px solid #E6E6E6"
        padding="0px 15px"
      >
        <Box
          p="7px 0px"
          cursor="pointer"
          _hover={{ borderBottom: "2px solid black" }}
        >
          <Box borderRight="1px solid #E6E6E6" p="0px 10px">
            <Text fontSize="sm">Stores & Events</Text>
          </Box>
        </Box>

        <Box
          p="7px 0px"
          cursor="pointer"
          _hover={{ borderBottom: "2px solid black" }}
        >
          <Box borderRight="1px solid #E6E6E6" p="0px 10px">
            <Text fontSize="sm">Shopping Services</Text>
          </Box>
        </Box>

        <Box
          p="7px 0px"
          cursor="pointer"
          _hover={{ borderBottom: "2px solid black" }}
        >
          <Box p="0px 0px 0px 10px" display="flex" alignItems="center">
            <Image src={India} alt="India" boxSize="16px" mr="4px" />
            <Text fontSize="sm">INR</Text>
          </Box>
        </Box>
      </Flex>

      <Flex padding={{ sm: "10px 15px 10px 15px", base: "10px 15px 0px 15px" }}>
        <Box
          justifyContent="flex-start"
          alignItems="center"
          fontSize={{ md: "25px", sm: "18px", base: "14px" }}
          flex="0.1"
          display={{ base: "flex", lg: "none" }}
        >
          <HamburgerIcon onClick={onOpen} />
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerCloseButton />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">
                <Heading
                  textAlign="center"
                  size="md"
                  fontFamily="Brush Script MT, Brush Script Std, cursive;"
                >
                  TrendyMart
                </Heading>
              </DrawerHeader>
              <DrawerBody>
                {data.map((e) => {
                  return <Text mt="20px">{e}</Text>;
                })}
              </DrawerBody>
              <DrawerFooter borderTopWidth="1px">
                <Box w="100%">
                  <Text>Stores & Events</Text>
                  <Text>Shopping Services</Text>
                </Box>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>

        <Box
          flex={{ lg: "0.5", base: "1" }}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Link to="/" ><Heading
            size={{ md: "lg", sm: "md", base: "sm" }}
            fontFamily="Brush Script MT, Brush Script Std, cursive;"
          >
            TrendyMart
          </Heading></Link>
        </Box>
        <Box
          flex="1"
          display={{ lg: "flex", base: "none" }}
          justifyContent="flex-end"
          alignItems="flex-end"
          pr="15px"
          flexDirection="column"
        >
          <InputGroup w="300px" size="sm">
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input
              type="text"
              placeholder="Search"
              variant="flushed"
              borderBottom="1px solid black"
              focusBorderColor="1px solid black"
              value={searchTerm}
              onChange={handleSearch}
            />
          </InputGroup>
          {searchTerm && (
            <div
              style={{
                position: "absolute",
                zIndex: 999,
                fontWeight: "600",
                backgroundColor: "white",
                padding: "20px",
                top: "95px",
                overflow:"scroll",
                height:"350px"
                // width:"20%"
              }}
            >
              {filteredProducts.slice(0, 6).map((product) => (
                <Link key={product._id} to={`/products/${product._id}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "20px 10px",
                      alignItems: "center",
                      borderBottom: "2px solid gray",
                      gap: "50px",

                      width:"280px",
                      
                    }}
                    id="searchDiv"
                  >
                    <img width="40px"   src={product.url} alt="" />
                    {/* <p style={{display:"flex",textAlign:"start",alignItems:"start"}}>{product.title.substring(0,20)}</p> */}
                    <div
                      style={{
                        display: "flex",
                        textAlign: "start",
                        alignItems: "start",
                        width:"70%"
                      }}
                    >
                      <p>{product.title}</p>
                    </div>
                  </div>
                  {/* <hr style={{margin:"10px 0px"}}/> */}
                </Link>
              ))}
            </div>
          )}
        </Box>

        {isAuth ? (
          <Box
            mr={{ lg: "0px", base: "7px" }}
            flex={{ lg: "0.20", sm: "0.4", base: "0.85" }}
            display="flex"
            alignItems="center"
            justifyContent={{ lg: "center", base: "flex-end" }}
          >
            <Text
              fontSize={{ md: "md", sm: "sm", base: "sm" }}
              fontWeight={600}
            >
              Hi ! {name}
            </Text>
          </Box>
        ) : null}

        {isAuth ? (
          <Box
            flex={{ lg: "0.1", base: "0.08" }}
            cursor="pointer"
            _hover={{ borderBottom: "2px solid black" }}
            display="flex"
            alignItems="center"
            justifyContent={{ lg: "center", base: "flex-end" }}
            mr="5px"
          >
            <Text
              fontSize={{ md: "lg", sm: "md", base: "sm" }}
              fontWeight={600}
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </Text>
          </Box>
        ) : (
          <Box
            flex={{ lg: "0.18", base: "0.15" }}
            cursor="pointer"
            _hover={{ borderBottom: "2px solid black" }}
            display="flex"
            alignItems="center"
            justifyContent={{ lg: "center", base: "flex-end" }}
            mr={{ md: "0px", base: "5px" }}
            onClick={getOn}
          >
            <Text
              fontSize={{ md: "lg", sm: "md", base: "sm" }}
              fontWeight={600}
            >
              Login/Signup
            </Text>
          </Box>
        )}
        <LoginModal
          isOn={isOn}
          getOn={getOn}
          getOff={getOff}
          register={register}
          openRegister={openRegister}
          closeRegister={closeRegister}
        />
        <Signup
          getOn={getOn}
          register={register}
          openRegister={openRegister}
          closeRegister={closeRegister}
        />

        <Box
          flex={{ lg: "0.05", base: "0.05" }}
          display="flex"
          alignItems="center"
          justifyContent={{ lg: "center", base: "flex-end" }}
        >
          <Link to="/cart" ><FaShoppingCart cursor="pointer" fontSize="22px" /></Link>
        </Box>
      </Flex>

      <div className="dropdown">
        <Flex
          padding="0px 15px "
          borderBottom="1px solid #E6E6E6"
          justifyContent="space-between"
        >
          {data.map((ele) => {
            let url;
            if(ele=="Men"){
              url=`/products?category=mens&maxprice=3000&minprice=10`
            }else if(ele=="Women"){
              url=`/products?category=womens&maxprice=3000&minprice=10`
            }else if(ele=="Kids"){
              url=`/products?category=kids&maxprice=3000&minprice=10`
            }else{
              url=`/products?maxprice=3000&minprice=10`
            }
            return (
             <Link to={url} > <Box
                onMouseEnter={() => {
                    document.querySelector(".dropdown-content").style.display =
                    "flex";
               
                }}
                cursor="pointer"
                pb="7px"
                _hover={{ borderBottom: "2px solid black" }}
                onMouseLeave={() => {
                  document.querySelector(".dropdown-content").style.display =
                    "none";
                }}
                onClick={()=>{
                  document.querySelector(".dropdown-content").style.display =
                  "none";
                }}
              >
                <Text fontWeight={600}>{ele}</Text>
              </Box>
              </Link>
            );
          })}
        </Flex>

        <div
          className="dropdown-content"
          onMouseEnter={() => {
            document.querySelector(".dropdown-content").style.display = "flex";
          }}
          onMouseLeave={() => {
            document.querySelector(".dropdown-content").style.display = "none";
          }}
        >
          <Box flex="1">
            <Text fontWeight={600} mb="10px" textAlign="left">
              Clothing
            </Text>
            {[
              "Active & Workout",
              "Blazers",
              "Cashmere",
              "Coats & Jackets",
              "Dresses",
              "Jeans & Denim",
              "Jumpsuits & Rompers",
              "Lingerie & Hosirie & Shapewear",
              "Loungewear",
              "Maternity",
              "Pants & Jeans",
              "Shorts & Skirts",
              "Sleepwears",
              "Sweaters",
              "Swimsuits & Robes",
              "Tops",
            ].map((ele) => {
              return (
                <Text
                  cursor="pointer"
                  _hover={{ color: "#D90EAC" }}
                  mb="10px"
                  textAlign="left"
                  fontSize="xs"
                >
                  {ele}
                </Text>
              );
            })}
          </Box>
          <Box flex="1">
            <Box>
              <Text fontWeight={600} mb="10px" textAlign="left">
                Dresses
              </Text>
              {[
                "Shop All",
                "Best Sellers",
                "Evening & Formal Gowns",
                "Cocktail",
                "Casual",
                "Party",
                "Prom Dresses & Gowns",
                "Wear to Work",
              ].map((ele) => {
                return (
                  <Text
                    cursor="pointer"
                    _hover={{ color: "#D90EAC" }}
                    mb="10px"
                    textAlign="left"
                    fontSize="xs"
                  >
                    {ele}
                  </Text>
                );
              })}
            </Box>
            <Box mt="20px">
              <Text fontWeight={600} mb="10px" textAlign="left">
                Active & Workout
              </Text>
              {[
                "Shop All",
                "Activewear Sets",
                "Leggings",
                "Tops & Teas",
                "Aloyoga",
              ].map((ele) => {
                return (
                  <Text
                    cursor="pointer"
                    _hover={{ color: "#D90EAC" }}
                    mb="10px"
                    textAlign="left"
                    fontSize="xs"
                  >
                    {ele}
                  </Text>
                );
              })}
            </Box>
          </Box>
          <Box flex="1">
            <Box>
              <Text fontWeight={600} mb="10px" textAlign="left">
                What to Wear For
              </Text>
              {[
                "Going Out",
                "Hitting the Slopes",
                "The Office",
                "Vacation",
                "Wedding Season",
                "Weekend",
              ].map((ele) => {
                return (
                  <Text
                    cursor="pointer"
                    _hover={{ color: "#D90EAC" }}
                    mb="10px"
                    textAlign="left"
                    fontSize="xs"
                  >
                    {ele}
                  </Text>
                );
              })}
            </Box>
            <Box mt="20px">
              <Text fontWeight={600} mb="10px" textAlign="left">
                New and Noteworthy
              </Text>
              {[
                "New Arrivals",
                "Best Sellers",
                "Most Wanted Styles",
                "New Farm: Rio",
                "Sprig Trends",
                "150th Anniversary Exclusives",
              ].map((ele) => {
                return (
                  <Text
                    cursor="pointer"
                    _hover={{ color: "#D90EAC" }}
                    mb="10px"
                    textAlign="left"
                    fontSize="xs"
                  >
                    {ele}
                  </Text>
                );
              })}
            </Box>
          </Box>
          <Box flex="1">
            <Box>
              <Text fontWeight={600} mb="10px" textAlign="left">
                Featured Designers
              </Text>
              {[
                "Shop All",
                "Alice + Olivia",
                "Aqua",
                "Maje",
                "Mother",
                "Theory",
              ].map((ele) => {
                return (
                  <Text
                    cursor="pointer"
                    _hover={{ color: "#D90EAC" }}
                    mb="10px"
                    textAlign="left"
                    fontSize="xs"
                  >
                    {ele}
                  </Text>
                );
              })}
            </Box>
            <Box mt="20px">
              <Text fontWeight={600} mb="10px" textAlign="left">
                Sales and Clearance
              </Text>
              {["Shop All", "Coats", "Dresses", "Sweaters", "Tops"].map(
                (ele) => {
                  return (
                    <Text
                      cursor="pointer"
                      _hover={{ color: "#D90EAC" }}
                      mb="10px"
                      textAlign="left"
                      fontSize="xs"
                    >
                      {ele}
                    </Text>
                  );
                }
              )}
            </Box>
          </Box>
          <Box flex="1">
            <Image
              src="https://assets.bloomingdalesassets.com/hnfwgl/dyn_img/cat_splash/2023_02WK2_SITE_RTW_FlyoutLP_FLYOUT_YL_JH_1675353826947.png"
              alt="image"
            />
          </Box>
        </div>
      </div>

      <Box p="0px 15px" display={{ lg: "none", base: "block" }}>
        <InputGroup w="100%" size="sm">
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input
            type="text"
            placeholder="Search"
            variant="flushed"
            borderBottom="1px solid black"
            focusBorderColor="1px solid black"
          />
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Navbar;
