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
  Radio,
  Textarea,
  useToast,
  
} from "@chakra-ui/react";
import "./details.css"
import {MinusIcon,AddIcon} from "@chakra-ui/icons"
import RecommendSlider from "./Slider";
import RecentlySlider from "./RecentlySlider";


const ProductDetails = () => {
  const toast = useToast();
  const [active,setActive] = useState(null)
  const [activeColor, setActiveColor] = useState(null);
  const [disable,setDisable] = useState(false)
  const [text,setText] = useState("")
  const [colorText, setColorText] = useState("Red");
  function handleButtonClick(button,buttonText){
    setActive(button)
    setDisable(true)
    setText(buttonText)
  }
  function handleButtonClick2(button,color) {
    setColorText(color);
    setActiveColor(button);
  }
  

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
      <div className="container">
        <div className="imageBox">
          <img
            src="https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12683554_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp"
            alt=""
          />
        </div>
        <div className="detail">
          <div style={{ textAlign: "left" }}>
            <h1 style={{ fontWeight: "bold" }}>Peter Millar</h1>
            <p>Crest Solid Regular Fit Quarter Zip Sweater</p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "45px" }}
          >
            <h1 style={{ marginRight: "5px" }}>INR</h1>
            <p style={{ marginRight: "10px" }}>15826.00</p>
            <p style={{ borderBottom: "1px solid" }}>Details</p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <h1 style={{ fontWeight: "bold", marginRight: "5px" }}>COLOR:</h1>
            <p style={{ marginRight: "10px" }}>{colorText}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "left",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => handleButtonClick2("button1", " BRITISH GRAY")}
              id="button1"
              className={`button9 ${
                activeColor === "button1" ? "activeColor" : ""
              }`}
              style={{
                height: "30px",
                width: "30px",
                fontSize: "20px",

                marginRight: "10px",
                backgroundColor: "rgb(213,213,215)",
              }}
            ></button>

            <button
              className={`button9 ${
                activeColor === "button2" ? "activeColor" : ""
              }`}
              id="button2"
              onClick={() => handleButtonClick2("button2", "Navy")}
              style={{
                height: "30px",
                width: "30px",
                fontSize: "20px",

                marginRight: "10px",
                backgroundColor: "rgb(42,61,125)",
              }}
            ></button>
            <button
              id="button3"
              className={`button9 ${
                activeColor === "button3" ? "activeColor" : ""
              }`}
              onClick={() => handleButtonClick2("button3", "COTTAGE BLUE")}
              style={{
                height: "30px",
                width: "30px",
                fontSize: "20px",
                marginRight: "10px",
                backgroundColor: "rgb(190,217,237)",
              }}
            ></button>
            <button
              id="button4"
              className={`button9 ${
                activeColor === "button4" ? "activeColor" : ""
              }`}
              onClick={() => handleButtonClick2("button4", "Moonflower")}
              style={{
                height: "30px",
                width: "30px",
                fontSize: "20px",

                marginRight: "10px",
                backgroundColor: "rgb(225,212,239)",
              }}
            ></button>
            <button
              id="button5"
              className={`button9 ${
                activeColor === "button5" ? "activeColor" : ""
              }`}
              onClick={() => handleButtonClick2("button5", "Sunwashed")}
              style={{
                height: "30px",
                width: "30px",
                fontSize: "20px",

                marginRight: "10px",
                backgroundColor: "rgb(253,210,195)",
              }}
            ></button>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <h1 style={{ fontWeight: "bold", marginRight: "5px" }}>SIZE:</h1>
            <p style={{ marginRight: "10px" }}>{text}</p>
            <h1 style={{ marginRight: "10px" }}>|</h1>
            <p style={{ borderBottom: "1px solid" }}>Size Chart</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "left",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => handleButtonClick("button1", "S")}
              id="button1"
              className={`button ${active === "button1" ? "active" : ""}`}
              style={{
                height: "45px",
                width: "45px",
                fontSize: "20px",
                border: "2px solid grey",
                marginRight: "10px",
              }}
            >
              S
            </button>

            <button
              className={`button ${active === "button2" ? "active" : ""}`}
              id="button2"
              onClick={() => handleButtonClick("button2", "M")}
              style={{
                height: "45px",
                width: "45px",
                fontSize: "20px",
                border: "2px solid grey",
                marginRight: "10px",
              }}
            >
              M
            </button>
            <button
              id="button3"
              className={`button ${active === "button3" ? "active" : ""}`}
              onClick={() => handleButtonClick("button3", "L")}
              style={{
                height: "45px",
                width: "45px",
                fontSize: "20px",
                border: "2px solid grey",
                marginRight: "10px",
              }}
            >
              L
            </button>
            <button
              id="button4"
              className={`button ${active === "button4" ? "active" : ""}`}
              onClick={() => handleButtonClick("button4", "XL")}
              style={{
                height: "45px",
                width: "45px",
                fontSize: "20px",
                border: "2px solid grey",
                marginRight: "10px",
              }}
            >
              XL
            </button>
            <button
              id="button5"
              className={`button ${active === "button5" ? "active" : ""}`}
              onClick={() => handleButtonClick("button5", "XXL")}
              style={{
                height: "45px",
                width: "45px",
                fontSize: "20px",
                border: "2px solid grey",
                marginRight: "10px",
              }}
            >
              XXL
            </button>
          </div>
          <div>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <Radio colorScheme="orange" defaultChecked></Radio>
              <div
                className="ship"
                style={{ marginLeft: "10px", fontWeight: "bold" }}
              >
                SHIP
              </div>
            </div>
            <div
              className="lowStock"
              style={{
                textAlign: "left",
                marginLeft: "25px",
                color: "#de3412",
                fontWeight: "700",
              }}
            >
              Low Stock
            </div>
          </div>
          <Button
            ref={btnRef}
            type="button"
            isDisabled={!disable}
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
                      <li>55% cotton/30% modal/5% polyester</li>
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
        </div>
        <div
          className="similar"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <Center fontSize="lg" mt="5">
            Similar Items
          </Center>
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
                  INR {item.price}
                </Center>
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
      <hr className="hr" />
      <RecommendSlider />
      <hr className="hr" />
      <Accordion
        allowMultiple
        defaultIndex={[0]}
        style={{ width: "80%", margin: "auto" }}
      >
        <AccordionItem p={3}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="center">
                    REVIEWS
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={10} mt={10}>
                <div>NO REVIEWS HAVE BEEN SUBMITTED YET</div>
                <Textarea
                  color="blackAlpha.900"
                  placeholder="How is the product? What do you like? What do you hate?"
                  size="sm"
                  mt="10"
                />
                <Button
                  onClick={() =>
                    toast({
                      title: `Sorry! You are not allowed to review this product since you haven't bought it`,
                      status: "info",
                      isClosable: true,
                    })
                  }
                  colorScheme="teal"
                  mt="5"
                  variant="solid"
                >
                  Submit
                </Button>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <hr className="hr" />
      <RecentlySlider />
      <hr className="hr" />
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
                    INR {item.price}
                  </Center>
                </GridItem>
              ))}
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ProductDetails;


