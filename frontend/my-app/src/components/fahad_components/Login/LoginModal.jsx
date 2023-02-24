import React from 'react';
import {
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalFooter,
 ModalBody,
 ModalCloseButton,
 InputRightElement,
 InputGroup,
 FormErrorMessage,
 
} from '@chakra-ui/react';

import {
 Flex,
 Box,
 FormControl,
 FormLabel,
 Input,
 Checkbox,
 Stack,
 Link,
 Button,
 Heading,
 Text,
 useColorModeValue,
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';




const LoginModal = ({isOn,getOn,getOff,register,openRegister,closeRegister}) => {
 const [showPassword, setShowPassword] = React.useState(false);
 const [email,setEmail]=React.useState("");
 const [password,setPassword]=React.useState("");
 const [error1,setError1]=React.useState(false);
 const [error2,setError2]=React.useState(false);


 




 const handleSubmit=(e)=>{
e.preventDefault();
console.log(error2)
setError1(email==="");
setError2(password==="")


 }

  return (
    <>
 <Modal isOpen={isOn} onClose={getOff}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
          <Stack align={'center'} mt="10px">
          <Heading fontSize={'3xl'}>Sign in to your account</Heading>
          <Text fontSize={'md'} color={'gray.500'}>
            to enjoy all of our cool <Link color={'black'}>features</Link> ✌️
          </Text>
        </Stack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          mb="30px"
          >
          <Stack spacing={4}>
            <FormControl id="email" isRequired isInvalid={error1} >
              <FormLabel>Email address</FormLabel>
              <Input type="email" focusBorderColor='black' value={email} onChange={(e)=>{
               setEmail(e.target.value)
              }} />
              {
               error1? <FormErrorMessage>Email is required.</FormErrorMessage>:null
              }
            </FormControl>
            <FormControl id="password" isRequired isInvalid={error2}  >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} focusBorderColor="black" value={password} onChange={(e)=>{
               setPassword(e.target.value)}} />
               
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {
               error2? <FormErrorMessage>Password is required.</FormErrorMessage>:null
              }
            </FormControl>
            <Stack spacing={8} >
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'black'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'black'}
                color={'white'}
                _hover={{ bgColor:"white",color:"black",border:"2px solid black",fontWeight:"bold"}}
                onClick={handleSubmit}
                >
                Sign in
              </Button>
            </Stack>
            <Text fontWeight={500} color="gray.500" >If not registered then please <Link color="black" onClick={()=>{
             getOff();
             openRegister();
            }} >Signup</Link>. </Text>
           
          </Stack>
        </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginModal