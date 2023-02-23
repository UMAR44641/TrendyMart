import React from 'react'

const MensProductCard = (props) => {
    const {image,selection2,selection3}=props
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div>
                <img src={image} alt="image" />
        </div>
        <hr/>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
            <h4>{selection2}</h4>
            <p style={{textAlign:"start"}}>{selection3}</p>
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