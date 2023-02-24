import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const MensProductCard = (props) => {
    // const {image,selection2,selection3}=props
    const {url,price,desc,title,cutprice}=props

  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={url}
      alt={title}
      // boxSize='250px'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text noOfLines={1}>
        {desc}
      </Text>
      <Text color='black' fontSize='2xl'>
        Price:{price}
      </Text>
      <Text color='black' fontSize='2xl' as='s'>
        Price:{cutprice}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    // <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    //     <div>
    //             <img src={url} alt="imag" />
    //     </div>
    //     <hr/>
    //     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
    //         <h4>{title}</h4>
    //         <p style={{textAlign:"start"}}>{desc}</p>
    //         <p>⭐⭐⭐⭐⭐</p>
    //         <p style={{fontSize:"15px",fontWeight:"bold"}}>INR {price}</p>
    //         <div style={{display:"flex",gap:"10px"}}>
    //             <div style={{border:"15px solid red"}}> </div>
    //             <div style={{border:"15px solid gray"}}></div>
    //             <div style={{border:"15px solid blue"}}></div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default MensProductCard