import { Button, Input, InputGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

export default function UsersC() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const token = JSON.parse(localStorage.getItem("adminLoginData"));
  const getData = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: token.token,
      };
      const response = await axios.get(
        "https://courageous-tuxedo-dog.cyclic.app/users",
        { headers: headers }
      );
      setData(response.data);
      setFilteredData(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let result = data.filter((item) => {
      return item.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredData(result);
  }, [search]);

  const columns = [
    {
      name: <h1 style={{ fontSize: "20px" }}>Name</h1>,
      selector: (row) => (
        <p style={{ fontSize: "17px" }}>{row.name.toUpperCase()}</p>
      ),
    },
    {
      name: <h1 style={{ fontSize: "20px" }}>Email</h1>,
      selector: (row) => <p style={{ fontSize: "15px" }}>{row.email}</p>,
    },
    {
      name: <h1 style={{ fontSize: "20px" }}>Gender</h1>,
      selector: (row) => (
        <p style={{ fontSize: "15px" }}>
          {row.gender.charAt(0).toUpperCase() + row.gender.slice(1)}
        </p>
      ),
    },
    {
      name: <h1 style={{ fontSize: "20px" }}>City</h1>,
      selector: (row) => (
        <p style={{ fontSize: "15px" }}>
          {row.city.charAt(0).toUpperCase() + row.city.slice(1)}
        </p>
      ),
    },
    {
      name: <h1 style={{ fontSize: "20px" }}>Age</h1>,
      selector: (row) => <p style={{ fontSize: "15px" }}>{row.age}</p>,
    },
    {
      name: <h1 style={{ fontSize: "20px" }}>Mobile no</h1>,
      selector: (row) => <p style={{ fontSize: "15px" }}>{row.mobile}</p>,
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
            onChange={(e) => setSearch(e.target.value)}
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
}
