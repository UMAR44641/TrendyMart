import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Cartcard.module.css";
export const Cartcard = (props) => {
  const {
    url,
    title,
    desc,
    price,
    quantity,
    category,
    _id,

    Increaseq,
    Decq,
    DeleteData,
  } = props;

  return (
    <div>
      <div className={styles.b1}>
        <div className={styles.b2}>
          <div className={styles.b21}>
            <div className={styles.b211}>
              <img src={url} alt="product photo" className={styles.img1} />
            </div>
          </div>
          <div className={styles.b22}>
            <div className={styles.b221}>
              <div className={styles.b2211}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <div className={styles.b2212}>
                <p>WEB ID : {_id}</p>
              </div>
              <div className={styles.b2212}>
                <p>Category: {category}</p>
              </div>
              {/*  <div className={styles.b2212}>Color : {color}</div> */}
            </div>
            <div className={styles.b222}>
              <div className={styles.b2221}>
                <p>INR {Math.ceil(price)}</p>
              </div>
              <div className={styles.b2222}>
                <div className={styles.b22221}>
                  <div>
                    {/* <div>
                      <h3>Qty:</h3>
                    </div> */}
                    <div
                      className={styles.select1}
                      style={{
                        display: "flex",
                        width: "100px",
                        textAlign: "center",
                      }}
                    >
                      <h3 style={{ paddingRight: "5px" }}>Qty:</h3>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        {" "}
                        <button
                          disabled={quantity == 1}
                          onClick={() => Decq(_id)}
                          style={{
                            width: "30%",
                            // border: "1px solid",
                            borderRadius: "3px",
                            background: "lightgrey",
                            color: "black",
                          }}
                        >
                          -
                        </button>
                        <h3
                          style={{
                            width: "30%",
                          }}
                        >
                          {quantity}
                        </h3>
                        <button
                          onClick={() => Increaseq(_id)}
                          style={{
                            width: "30%",
                            // border: "1px solid",
                            borderRadius: "3px",
                            background: "lightgrey",
                            color: "black",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.b22222}>
                  <h3>INR {eval(price * quantity)}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.b3}>
          <div className={styles.b21}></div>
          <div className={styles.b22}>
            <div className={styles.b31}>
              <div className={styles.b311}>
                <input type="radio" />
              </div>
              <div className={styles.b312}>
                <h3>
                  <b>SHIP</b>
                </h3>
                <p>
                  Direct from vendor. Usually leaves the facility within 4
                  business days.
                </p>
                <button
                  style={{
                    margin: "20px 0 0 0",
                    borderBottom: "1px solid black",
                  }}
                  onClick={() => DeleteData(_id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
