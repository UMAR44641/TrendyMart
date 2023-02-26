

import { Button, Input, InputGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import axios from "axios"

export default function OrdersC() {
    const [search,setSearch] = useState("")
     const [data, setData] = useState([]);
     const [filteredData,setFilteredData] = useState([])
     const token = JSON.parse(localStorage.getItem("adminLoginData"));
     const getData = async () => {
       try {
         const headers = {
           "Content-Type": "application/json",
           Authorization: token.token,
         };
         const response = await axios.get(
           "https://courageous-tuxedo-dog.cyclic.app/orders",
           { headers: headers }
         );
         setData(response.data);
         setFilteredData(response.data)
         console.log(response)
       } catch (err) {
         console.log(err);
       }
     };

     useEffect(() => {
       getData();
     }, []);
     const deleteData = async (id) => {
       try {
         const headers = {
           "Content-Type": "application/json",
           Authorization: token.token,
         };
         const response = await axios.delete(
           `https://courageous-tuxedo-dog.cyclic.app/orders/delete/${id}`,
           { headers: headers }
         );
         console.log(response);
         getData()
       } catch (err) {
         console.log(err);
       }
     };

     useEffect(()=>{
           let result = data.filter(item=>{
            return item.desc.toLowerCase().match(search.toLowerCase())
           })
           setFilteredData(result)
 
     },[search])

     const columns = [
       {
         name: <h1 style={{ fontSize: "20px" }}>Category</h1>,
         selector: (row) => (
           <p style={{ fontSize: "15px" }}>
             {row.category.charAt(0).toUpperCase() + row.category.slice(1)}
           </p>
         ),
         sortable: true,
       },
       {
         name: <h1 style={{ fontSize: "20px" }}>Title</h1>,
         selector: (row) => <p style={{ fontSize: "15px" }}>{row.title}</p>,
         sortable: true,
       },
       {
         name: <h1 style={{ fontSize: "20px" }}>Price</h1>,
         selector: (row) => <p style={{ fontSize: "17px" }}>INR {row.price}</p>,
         sortable: true,
       },
       {
         name: <h1 style={{ fontSize: "20px" }}>Description</h1>,
         selector: (row) => <p style={{ fontSize: "15px" }}>{row.desc}</p>,
         sortable: true,
       },
       {
         name: <h1 style={{ fontSize: "20px" }}>Image</h1>,
         selector: (row) => <img width={50} height={50} src={row.url} />,
       },
       {
         name: <h1 style={{ fontSize: "20px" }}>Action</h1>,
         cell: (row) => (
           <Button onClick={() => deleteData(row._id)} colorScheme="red">
             Delete
           </Button>
         ),
       },
     ];
  
  return (
    <DataTable
      subHeader
      subHeaderComponent={
        <InputGroup>
          <Input
            type="text"
            borderColor="skyBlue"
            placeholder="Search any product"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </InputGroup>
      }
      title="Orders List"
      fixedHeader
      fixedHeaderScrollHeight="500px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      columns={columns}
      data={filteredData}
      pagination
    />
  );
};


