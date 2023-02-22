import React,{useEffect, useState} from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  Button,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Image,
  Center,
  Divider,
  Grid,
  GridItem,
  Spacer,
  
} from "@chakra-ui/react";
import {MinusIcon,AddIcon} from "@chakra-ui/icons"
import RecommendSlider from "./Slider";


const ProductDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [data,setData] = useState([])
    const getData=async()=>{
    let res = await fetch("https://amazon-t415.onrender.com/products?category=mens");
    res = await res.json()
    setData(res)
    }
    useEffect(()=>{
           getData()
    },[])
  return (
    <div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>ADDED TO YOUR BAG!</DrawerHeader>
          <Divider />

          <DrawerBody>
            <Center>
              <Image
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/11929298_fpx.tif?op_sharpen=1&wid=100&fit=fit,1&$filterlrg$"
                style={{ margin: "auto" }}
              />
            </Center>
            <Center mt={5}>1 item added:</Center>
            <Center mt={1}>
              <p style={{ color: "black", fontWeight: "bold" }}>Total</p>: INR
              11,533.00
            </Center>
            <Button
              ref={btnRef}
              onClick={onOpen}
              rounded={"none"}
              w={"full"}
              mt={6}
              mb={10}
              size={"lg"}
              py={"2"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              VIEW BAG & CHECKOUT
            </Button>
            <Divider />
            <Center>RECOMMENDED FOR YOU</Center>
            <Grid mt={5} templateColumns="repeat(2, 1fr)" gap={10}>
              {data.slice(0, 16).map((item) => (
                <GridItem key={item.id}>
                  <Image height="200px" src={item.url} />
                  <Center color="black" fontSize="xs">
                    {item.title}
                  </Center>
                  <Center mt={1} fontSize="xs">
                    <p style={{ color: "black", fontWeight: "bold" }}>Total</p>:
                    INR {item.price}.00
                  </Center>
                </GridItem>
              ))}
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* <Flex> */}
        <Box maxW="500px">
          <Button
            ref={btnRef}
            onClick={onOpen}
            rounded={"none"}
            w={"full"}
            mt={6}
            mb={10}
            size={"lg"}
            py={"2"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to bag
          </Button>{" "}
          {/* maxW property sets maximum width */}
          <Accordion allowMultiple>
            <AccordionItem p={3}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        SIZE & FIT
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                      <li>Fits true to size, order your normal size</li>
                      <li>Designed for a classic fit</li>
                    </ul>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem p={3}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        PRODUCT DETAILS
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                      <li>Mock neck</li>
                      <li>Quarter-zip placket</li>
                      <li>Long sleeves, cuffs</li>
                      <li>Made in India</li>
                      <li>Web ID: 4252489</li>
                    </ul>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem p={3}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        MATERIAL & CARE
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                      <li>55% cotton/40% modal/5% polyester</li>
                      <li>Machine wash</li>
                    </ul>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem p={3}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        SHIPPING & RETURNS
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                      <li>Please call customer service for returns.</li>
                    </ul>
                    <p style={{ textAlign: "left", marginTop: "5px" }}>
                      For complete details, see our Shipping and Returns
                      policies.
                    </p>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
        <Spacer/>
        <Box boxShadow="base" p="6" bg="white" maxW="200px">
          <Center fontSize="lg">Similar Items</Center>
          <Grid mt={5} templateColumns="repeat(1, 1fr)" gap={10}>
            {data.slice(16, 21).map((item) => (
              <GridItem key={item.id}>
                <Center>
                  <Image height="200px" src={item.url} />
                </Center>
                <Center color="black" fontSize="ms">
                  {item.title}
                </Center>
                <Center mt={1} fontSize="ms">
                  INR {item.price}.00
                </Center>
              </GridItem>
            ))}
          </Grid>
        </Box>
        <RecommendSlider/>
      {/* </Flex> */}
    </div>
  );
};

export default ProductDetails;


