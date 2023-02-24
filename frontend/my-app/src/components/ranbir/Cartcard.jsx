import React, { useState } from "react";
import styles from "./Cartcard.module.css";
export const Cartcard = () => {
  const [quantity, setq] = useState(1);
  const handleChange = (e) => {
    setq(e.target.value);
  };
  const data = {
    id: 1,
    img: "http://slimages.macys.com/is/image/BLM/products/3/optimized/12615933_fpx.tif?bgc=255,255,255&wid=200&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
    title: "Title1",
    price: "123",
    des: "sdffsdfsf sdfsf sdf fsdfs fsd sfd sdfsd fsdfdfs",
    color: "black",
    size: "6",
  };
  return (
    <div>
      <div className={styles.b1}>
        <div className={styles.b2}>
          <div className={styles.b21}>
            <div className={styles.b211}>
              <img src={data.img} alt="product photo" className={styles.img1} />
            </div>
          </div>
          <div className={styles.b22}>
            <div className={styles.b221}>
              <div className={styles.b2211}>
                <h3>{data.title}</h3>
                <p>{data.des}</p>
              </div>
              <div className={styles.b2212}>
                <p>WEB ID : {data.id}</p>
              </div>
              <div className={styles.b2212}>
                <p>Size : {data.size}</p>
              </div>
              <div className={styles.b2212}>Color : {data.color}</div>
            </div>
            <div className={styles.b222}>
              <div className={styles.b2221}>
                <p>INR {data.price}</p>
              </div>
              <div className={styles.b2222}>
                <div className={styles.b22221}>
                  <div>
                    {/* <div>
                      <h3>Qty:</h3>
                    </div> */}
                    <div className={styles.select1}>
                      <label>Qty:</label>
                      <select value={quantity} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className={styles.b22222}>
                  <h3>INR {eval(data.price * quantity)}</h3>
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
                    borderBottom: "1px solid pink",
                  }}
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
