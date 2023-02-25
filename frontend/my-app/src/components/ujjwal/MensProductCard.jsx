import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const MensProductCard = (props) => {
    // const {image,selection2,selection3}=props
    const {url,price,desc,title,cutprice,_id}=props

  return (
//     <Card maxW='sm'>
//   <CardBody>
//     <Image
//       src={url}
//       alt={title}
//       // boxSize='250px'
//       borderRadius='lg'
//     />
//     <Stack mt='6' spacing='3'>
//       <Heading size='md'>{title}</Heading>
//       <Text noOfLines={1}>
//         {desc}
//       </Text>
//       <Text color='black' fontSize='2xl'>
//         Price:{price}
//       </Text>
//       <Text color='black' fontSize='2xl' as='s'>
//         Price:{cutprice}
//       </Text>
//     </Stack>
//   </CardBody>
//   <Divider />
//   <CardFooter>
//     <ButtonGroup spacing='2'>
//       <Button variant='solid' colorScheme='blue'>
//         Buy now
//       </Button>
//       <Button variant='ghost' colorScheme='blue'>
//         Add to cart
//       </Button>
//     </ButtonGroup>
//   </CardFooter>
// </Card>
    <Link to={`/products/${_id}`}>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Box>
                <Image w="200px" h="280px" objectFit="cover" m="auto" src={url} alt="imag" />
        </Box>
        <hr/>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
            <h4>{title}</h4>
            <Text textAlign="start" noOfLines={1}>{desc}</Text>
            <p style={{fontSize:"13px"}}>⭐⭐⭐⭐⭐</p>
            <span style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            Price:<p style={{fontSize:"15px",fontWeight:"bold",marginLeft:"5px"}}> ₹{price}</p>
            </span>
            <span style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            CutPrice:<p style={{fontSize:"15px",fontWeight:"bold",marginLeft:"5px"}}><s>₹{cutprice}</s> </p>
            </span>
            <div style={{display:"flex",gap:"10px"}}>
                <div style={{height:"15px",width:"15px",backgroundColor:"red"}}> </div>
                <div style={{height:"15px",width:"15px",backgroundColor:"gray"}}></div>
                <div style={{height:"15px",width:"15px",backgroundColor:"black"}}></div>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default MensProductCard