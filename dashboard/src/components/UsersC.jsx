import { Button, Input, InputGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component"


export default function UsersC() {
    const [search,setSearch] = useState("")
     const [data, setData] = useState([]);
     const [filteredData,setFilteredData] = useState([])
     const getData = async () => {
       try {
         let response = await fetch(
           "https://amazon-t415.onrender.com/products"
         );
         response = await response.json()
         setData(response);
         setFilteredData(response)
         console.log(response)
       } catch (err) {
         console.log(err);
       }
     };
     useEffect(() => {
       getData();
     }, []);

     useEffect(()=>{
           let result = data.filter(item=>{
            return item.desc.toLowerCase().match(search.toLowerCase())
           })
           setFilteredData(result)
 
     },[search])

     const columns = [
       {
         name: <h1 style={{ fontSize: "20px" }}>Category</h1>,
         selector: (row) => row.category,
         sortable: true,
       },
       {
         name: <h1 style={{ fontSize: "20px" }}>Title</h1>,
         selector: (row) => row.title,
         sortable: true,
       },
       {
         name: <h1 style={{ fontSize: "20px" }}>Price</h1>,
         selector: (row) => <p style={{ fontSize: "17px" }}>{row.price}</p>,
         sortable: true,
       },
       {
         name: <h1 style={{ fontSize: "20px" }}>Description</h1>,
         selector: (row) => row.desc,
         sortable: true,
       },
       {
         name: <h1 style={{ fontSize: "20px" }}>Image</h1>,
         selector: (row) => <img width={50} height={50} src={row.url} />,
       },
       {
         name: <h1 style={{ fontSize: "20px" }}>Action</h1>,
         cell: (row) => <Button colorScheme="red">Delete</Button>,
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
      title="Customer List"
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

