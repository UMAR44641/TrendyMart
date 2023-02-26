import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import {Link} from "react-router-dom"
import axios from "axios"
import React,{useState,useEffect} from "react";

const Widget = ({ type }) => {
  const token = JSON.parse(localStorage.getItem("adminLoginData"));
  const [users, setUsers] = useState();
  const getUsers = async () => {
    try {
      let response = await axios.get(
        "https://courageous-tuxedo-dog.cyclic.app/users/"
      ,{
        headers:{
          Authorization:token.token
        }
      });
      setUsers(response.data.length);
    } catch (err) {
      console.log(err);
    }
  };
  const [products,setProducts]= useState()
    const getData = async () => {
      try {
        let response = await axios.get(
          "https://courageous-tuxedo-dog.cyclic.app/products"
        );
        setProducts(response.data.length)
      } catch (err) {
        console.log(err);
      }
    };
    const [orders,setOrders] = useState([])
    const totalPrice = orders.reduce((acc, order) => acc + order.price, 0);
    const getData4 = async () => {
      try {
        let response = await axios.get(
          "https://courageous-tuxedo-dog.cyclic.app/orders/"
        ,{
          headers:{
            Authorization:token.token
          }
        });
        console.log(response.data)
        setOrders(response.data)
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      getData();
      getUsers()
      getData4()
    }, []);
  let data;

  //temporary
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        length:users,
        link: <Link to="/users">See all users</Link>,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        length:orders.length,
        link: <Link to="/orders">See all orders</Link>,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        length:totalPrice,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "PRODUCTS",
        isMoney: true,
        length:products,
        link: <Link to="/products">See Products</Link>,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.length}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
