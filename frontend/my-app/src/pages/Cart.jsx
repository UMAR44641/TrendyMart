import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cartcard } from "../components/ranbir/Cartcard";
import styles from "./cart.module.css";
export const Cart = () => {
  const [data, setData] = useState([]);
  const t = JSON.parse(localStorage.getItem("loginData")) || null;
  const getData = async () => {
    axios
      .get("https://courageous-tuxedo-dog.cyclic.app/cart", {
        headers: {
          authorization: t.token,
        },
      })
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    // console.log(token);

    getData();
    // setTimeout(() => {
    //   console.log(data);
    // }, 5000);
  }, []);
  return (
    <div>
      <div className={styles.cont1}>
        <div className={styles.q1}>
          <h1
            style={{
              fontSize: "16px",
              letterSpacing: "5px",
              wordSpacing: "5x",
            }}
          >
            YOUR BROWN BAG
          </h1>
          <p
            style={{
              margin: "15px",
              color: "grey",
              letterSpacing: "5px",
              fontSize: "12px",
            }}
          >
            BAG ID: {Math.ceil(Math.random() * 100) + 1}
          </p>
        </div>
        <div className={styles.but1}>
          <button style={{ display: "flex" }}>
            <svg
              padding="10px"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8112 0.950195H1.18725C1.05238 0.952013 0.923561 1.00646 0.828279 1.10193C0.732998 1.1974 0.678799 1.32632 0.677246 1.4612V12.1792C0.677246 12.4542 0.910246 12.6892 1.18725 12.6892H4.50725L4.54025 15.5402C4.54325 15.8192 4.77725 16.0502 5.06125 16.0502C5.19297 16.05 5.31922 15.9975 5.41225 15.9042L8.54925 12.6952H15.8112C15.9467 12.6931 16.0759 12.6384 16.1717 12.5427C16.2675 12.4469 16.3222 12.3176 16.3242 12.1822V1.4602C16.3209 1.32547 16.2657 1.19722 16.1701 1.1022C16.0746 1.00719 15.946 0.952731 15.8112 0.950195Z"
                fill="black"
              ></path>
            </svg>
            <h3 style={{ margin: "-5px 0 0 0", fontWeight: "600" }}>
              Need Help?
            </h3>
          </button>
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.cart1}>
          {/* data */}
          {data.map((el) => (
            <Cartcard key={el._id} {...el} />
          ))}
        </div>
        <div className={styles.cart2}>
          <div className={styles.c1}>
            <h1
              style={{
                letterSpacing: "3px",
                fontWeight: "500",
              }}
            >
              PROMOS & OFFERS
            </h1>
          </div>
          <div className={styles.c1}>
            <h2>Enter promo code</h2>
          </div>
          <div className={styles.c1} style={{ flexDirection: "row" }}>
            <input
              type="text"
              style={{
                height: "3rem",
                width: "70%",
                border: "1px solid grey",
                borderRadius: "3px",
              }}
            />
            <button
              style={{
                background: "black",
                color: "white",
                width: "25%",
                height: "3rem",
                borderRadius: "5px",
              }}
            >
              Apply
            </button>
          </div>
          <hr style={{ margin: "20px 10px " }} />
          <div
            className={styles.c1}
            style={{ borderBottom: "2px solid black", height: "5rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",

                width: "100%",
                height: "100%",
                alignItems: "center",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              <div>
                <h1>Subtotal</h1>
              </div>
              <div>
                <h1>INR {"12345"}</h1>
              </div>
            </div>
          </div>
          <div className={styles.c1}>
            <p style={{ textAlign: "left", width: "90%", wordSpacing: "3px" }}>
              Shipping, duties & taxes calculated at checkout (if applicable)
            </p>
          </div>
          <div className={styles.c1} style={{ height: "40px" }}>
            <button
              style={{
                width: "100%",
                height: "100%",
                background: "black",
                color: "white",
                letterSpacing: "2px",
              }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className={styles.c12}>
            <div>
              <a href="#">Continue Shopping</a>
            </div>
            <div>
              <a href="#">Shipping to the United States?</a>
            </div>
          </div>
          <div className={styles.c1} style={{ margin: "25px" }}>
            <p>Item availability and pricing are not guaranteed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
