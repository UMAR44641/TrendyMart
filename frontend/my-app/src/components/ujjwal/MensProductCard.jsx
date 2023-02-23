import React from 'react'

const MensProductCard = (props) => {
    // const {image,selection2,selection3}=props
    const {url,price,desc,title,}=props

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div>
                <img src={url} alt="imag" />
        </div>
        <hr/>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
            <h4>{title}</h4>
            <p style={{textAlign:"start"}}>{desc}</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>INR {price}</p>
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