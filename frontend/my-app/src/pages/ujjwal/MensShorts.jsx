import React, { useEffect, useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import MensProductCard from "../../components/ujjwal/MensProductCard";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import axios from "axios"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const MensShorts = () => {
  const [data, setdata] = useState([])
 const getData=()=>{
    axios.get("https://amazon-t415.onrender.com/products")
  .then(res=>{
    console.log(res.data)
    setdata(res.data)
  })
  }

  useEffect(()=>{
    getData()
  },[])
  

  console.log(data);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", border: "0px solid gray", margin: "5px" }}>
        <Accordion allowMultiple>
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
                <button>Pants</button>
                <button>Jeans & Denim</button>
                <button>Shorts</button>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <h2 style={{ alignContent: "flex-start", display: "flex" }}>
            FILTER BY
          </h2>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      ITEM TYPE
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
                    }}
                  >
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Blazers</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Coats</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Dresses</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Jackets</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Jeans</label>
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
                    <Box as="span" flex="1" textAlign="left">
                      ITEM TYPE
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
                    }}
                  >
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Blazers</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Coats</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Dresses</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Jackets</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Jeans</label>
                    </div>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
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
          <Grid templateColumns={{base:`repeat(1,1fr)`,sm:`repeat(2,1fr)`,md:`repeat(3,1fr)`,lg:`repeat(4,1fr)`}} margin={"auto"} gap={6}>
            {data?.map((el) => (
              <MensProductCard
                key={el.id}
                {...el}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default MensShorts;
