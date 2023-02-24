import React, { useEffect, useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useSearchParams } from 'react-router-dom';


export const SideBar = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const initialState=searchParams.getAll("itemType")
    const initialPrice=searchParams.getAll("price")
    const initialcategory=searchParams.getAll("category")
    const [itemType,setitemType]=useState(initialState||[])
    const [price,setprice]=useState(initialPrice||[])
    const [category,setcategory]=useState(initialcategory[0]||"")
    // console.log(itemType);//
console.log(searchParams.getAll("itemType") );

    const handelFilter=(e)=>{
        let newitemType=[...itemType]

        if(newitemType.includes(e.target.value)){
            newitemType.splice(newitemType.indexOf(e.target.value),1)
        }else{
            newitemType.push(e.target.value)
        }
        setitemType(newitemType)
    }
    const handelPrice=(e)=>{
        let newiPrice=[...price]

        if(newiPrice.includes(e.target.value)){
            newiPrice.splice(newiPrice.indexOf(e.target.value),1)
        }else{
            newiPrice.push(e.target.value)
        }
        setprice(newiPrice)
    }
    const handelCategory=(e)=>{
        setcategory(e.target.value)
    }
    useEffect(() => {
        const params={
            itemType
        }
        category&&(params.category=category)
        price&&(params.price=price)
        setSearchParams(params)
    
    }, [itemType,category,price])
  return (
    <div style={{margin:"0px 20px",fontWeight:"revert-layer"}}>
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
            <div onChange={handelCategory}>
                <div><input type="radio" name="category" id=""  value="kids" defaultChecked={category==="kids"}/>
                <label htmlFor="">Kids</label></div>
                <div><input type="radio" name="category" id="" value="mens" defaultChecked={category==="mens"} />
                <label htmlFor="">Mens</label></div>
                <div><input type="radio" name="category" id="" value="womens" defaultChecked={category==="womens"} />
                <label htmlFor="">Womens</label></div>
            </div>
              {/* <button>Kids</button>
              <button>Mens</button>
              <button>Womens</button> */}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <h2 style={{ alignContent: "flex-start", display: "flex",margin:"10px 15px" }}>
          FILTER BY
        </h2>
        <AccordionItem >
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
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
                    fontSize:"18px"
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox"  value="Blazers" onChange={handelFilter} checked={itemType.includes("Blazers")}/>
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" value="Coats" onChange={handelFilter} checked={itemType.includes("Coats")} />
                    <label for="scales"> Coats</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" value="Dresses" onChange={handelFilter} checked={itemType.includes("Dresses")} />
                    <label for="scales"> Dresses</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" value="Jackets" onChange={handelFilter} checked={itemType.includes("Jackets")} />
                    <label for="scales"> Jackets</label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" value="Jeans" onChange={handelFilter} checked={itemType.includes("Jeans")} />
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
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" margin="10px 0px">
                   Fit
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
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px"}}>
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
                   Fabric
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
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px"}}>
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
                    fontSize:"18px"
                  }}
                >
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px"}}>
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
                    fontSize:"18px"
                  }}
                >
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px"}}>
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
                    fontSize:"18px"
                  }}
                >
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px"}}>
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
                    fontSize:"18px"
                  }}
                >
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px"}}>
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
                    fontSize:"18px"
                  }}
                >
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px"}}>
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
                    fontSize:"18px"
                  }}
                >
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px"}}>
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
                    fontSize:"18px"
                  }}
                >
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Blazers</label>
                  </div>
                  <div style={{ margin: "10px"}}>
                    <input type="checkbox" id="scales" name="price" />
                    <label for="scales"> Coats</label>
                  </div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SideBar;
