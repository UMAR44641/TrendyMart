import React, { useEffect, useState } from "react";
import MensProductCard from "../../components/ujjwal/MensProductCard";
import { Grid } from "@chakra-ui/react";
import axios from "axios"
import SideBar from "../../components/ujjwal/SideBar";
import { useLocation, useSearchParams } from "react-router-dom";

const MensShorts = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
console.log("locayion",location.search)
  const [data, setdata] = useState([])
 const getData=(params)=>{
    axios.get("https://amazon-t415.onrender.com/products",params)
  .then(res=>{
    console.log(res.data)
    setdata(res.data)
  })
  }

  useEffect(()=>{
    const price = searchParams.getAll("price")[0];
    const paramObj = {
      params: {
        category: searchParams.getAll("category"),
        _sort: price,
        _order: price,
      },
    }
    getData(paramObj)
  },[location.search])
  

  // console.log(data);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", border: "0px solid gray", margin: "5px",position:"sticky" }}>
      <SideBar/>
      </div>
      <div
        style={{
          width: "75%",
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
