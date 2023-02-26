import React, { useEffect, useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const initialState = searchParams.getAll("itemType");
  // const initialPrice = searchParams.getAll("");
  const initialcategory = searchParams.getAll("category");
  const initialOrder = searchParams.getAll("sort");
  // const [itemType, setitemType] = useState(initialState || []);
  const [price, setprice] = useState([100,800]);
  const [category, setcategory] = useState(initialcategory[0] || "");
  const [order, setOrder] = useState(initialOrder[0] || "");
// console.log(price)
  // console.log(itemType);//
  // console.log(searchParams.getAll("itemType"));

  // const handelFilter = (e) => {
  //   let newitemType = [...itemType];

  //   if (newitemType.includes(e.target.value)) {
  //     newitemType.splice(newitemType.indexOf(e.target.value), 1);
  //   } else {
  //     newitemType.push(e.target.value);
  //   }
  //   setitemType(newitemType);
  // };
  const handelSort = (e) => {
    setOrder(e.target.value);
  };
  // const handelPrice = (e) => {
  //   let newiPrice = [...price];

  //   if (newiPrice.includes(e.target.value)) {
  //     newiPrice.splice(newiPrice.indexOf(e.target.value), 1);
  //   } else {
  //     newiPrice.push(e.target.value);
  //   }
  //   setprice(newiPrice);
  // };
  const handelCategory = (e) => {
    setcategory(e.target.value);
  };
  useEffect(() => {
    const params = {
      // itemType,
    };
    category && (params.category = category);
    price && (params.maxprice = +price[1]);
    price && (params.minprice = +price[0]);
    order && (params.sort = order);
    setSearchParams(params);
  }, [category, price, order]);
  return (
    <div
      style={{ fontWeight: "revert-layer", width: "100%" }}
    >
      <Accordion defaultIndex={[0,1]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                CATEGORY
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                onChange={handelCategory}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="category"
                    id=""
                    value="kids"
                    defaultChecked={category === "kids"}
                  />
                  <label >Kids</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="category"
                    id=""
                    value="mens"
                    defaultChecked={category === "mens"}
                  />
                  <label >Mens</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="category"
                    id=""
                    value="womens"
                    defaultChecked={category === "womens"}
                  />
                  <label >Womens</label>
                </div>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                SORT BY
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                onChange={handelSort}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="sort_by"
                    id=""
                    value="asc"
                    defaultChecked={order === "asc"}
                  />
                  <label >Ascending</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="sort_by"
                    id=""
                    value="desc"
                    defaultChecked={order === "desc"}
                  />
                  <label >Decending</label>
                </div>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
        {/* <h2
          style={{
            alignContent: "flex-start",
            display: "flex",
            margin: "10px 15px",
          }}
        >
          FILTER BY
        </h2> */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                PRICE
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <RangeSlider
                defaultValue={[300, 1000]}
                min={0}
                max={3000}
                step={30}
                onChange={(val)=>setprice(val)}
                onChangeEnd={(val) => console.log(val)}
              >
                <RangeSliderTrack bg="red.100">
                  <RangeSliderFilledTrack bg="tomato" />
                </RangeSliderTrack>
                <RangeSliderThumb bgColor="red.500" boxSize={4} index={0} />
                <RangeSliderThumb bgColor="red.500" boxSize={4} index={1} />
              </RangeSlider>
            </div>
          </AccordionPanel>
        </AccordionItem>
        {/* <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
                   Price
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    fontSize:"18px"
                  }}
                >
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox"  name="price" value="200" onChange={handelPrice} checked={price.includes("200")}  />
                    <label for="scales"> 200</label>
                  </div>
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox"  name="price" value="800" onChange={handelPrice} checked={price.includes("800")} />
                    <label for="scales"> 800</label>
                  </div>
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox"  name="price" value="1500" onChange={handelPrice} checked={price.includes("1500")} />
                    <label for="scales"> 1500</label>
                  </div>
                  
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem> */}
        <AccordionItem>
          
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" >
                    FIT
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    fontSize: "18px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Coats</label>
                  </div>
                </div>
              </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
                    FABRIC
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    fontSize: "18px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Coats</label>
                  </div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
                    OCCASIONS
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    fontSize: "18px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Coats</label>
                  </div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        {/* <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
                    PERCENT OFF
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    fontSize: "18px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Coats</label>
                  </div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
                    SALES AND OFFER
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    fontSize: "18px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Coats</label>
                  </div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
                    FABRIC
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    fontSize: "18px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Coats</label>
                  </div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
                    COLOR
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    fontSize: "18px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Coats</label>
                  </div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
                    DESIGNER
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    fontSize: "18px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Coats</label>
                  </div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
                    PANT TYPE
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    fontSize: "18px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Coats</label>
                  </div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem> */}
      </Accordion>
    </div>
  );
};

export default SideBar;
