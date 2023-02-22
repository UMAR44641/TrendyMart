import React from 'react'

const MensProductCard = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div>
                <img src="https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12013238_fpx.tif?$2014_BROWSE_FASHION$&fmt=webp&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=372&hei=465" alt="" />
        </div>
        <hr/>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
            <h4>Boss</h4>
            <p>Mix & Match Cotton Stretch Logo Print Drawstring Shorts</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>INR 3,588.00</p>
            <div style={{display:"flex",gap:"10px"}}>
                <div style={{border:"15px solid red"}}> </div>
                <div style={{border:"15px solid gray"}}></div>
                <div style={{border:"15px solid blue"}}></div>
            </div>
        </div>
    </div>
  )
}

export default MensProductCard