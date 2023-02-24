import React,{useState} from 'react';
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
 Button,
 Checkbox,
 Stack
 
} from '@chakra-ui/react';

import {
 Progress,
 Box,
 ButtonGroup,
 Heading,
 Flex,
 FormControl,
 GridItem,
 FormLabel,
 Input,
 Select,
 SimpleGrid,
 InputLeftAddon,
 
 Textarea,
 FormHelperText,

} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Form1 = () => {
 const [showPassword, setShowPassword] = React.useState(false);
 return (
   <>
     <Heading w="100%" textAlign={'center'}  mb="4%" fontSize="3xl">
       User Registration
     </Heading>
  
       <FormControl isRequired>
         <FormLabel htmlFor="name" >
           Name
         </FormLabel>
         <Input id="name" placeholder="Your name" focusBorderColor="black" />
       </FormControl>
    
     <FormControl mt="2%" isRequired>
       <FormLabel htmlFor="email">
         Email address
       </FormLabel>
       <Input id="email" type="email" focusBorderColor="black" />
       <FormHelperText color="gray.500">We'll never share your email.</FormHelperText>
     </FormControl>

     <FormControl isRequired>
       <FormLabel htmlFor="password" mt="2%">
         Password
       </FormLabel>
       <InputGroup size="md">
         <Input
           pr="4.5rem"
           type={showPassword ? 'text' : 'password'} focusBorderColor="black" 
           placeholder="Enter password"
         />
         <InputRightElement h="full">
         <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
         </InputRightElement>
       </InputGroup>
     </FormControl>
   </>
 );
};

const Form2 = () => {
 return (
   <>
     <Heading w="100%" textAlign={'center'}  mb="4%" fontSize="3xl">
       User Details
     </Heading>
     <FormControl isRequired as={GridItem} colSpan={6}>
     <FormLabel htmlFor="city" mt="2%">
         City
       </FormLabel>
       <Input
         type="text"
         id="city"
         focusBorderColor="black"
         
        
       />
     </FormControl>

     <FormControl isRequired as={GridItem} colSpan={6}>
     <FormLabel htmlFor="mobile" mt="2%">
         Mobile
       </FormLabel>
       <Input
         type="number"
         id="mobile"
         focusBorderColor="black"
         
        
       />
     </FormControl>

     <FormControl isRequired as={GridItem} colSpan={6}>
     <FormLabel htmlFor="age" mt="2%">
         Age
       </FormLabel>
       <Input
         type="number"
         id="age"
         focusBorderColor="black"
         
        
       />
     </FormControl>

     <FormControl isRequired as={GridItem} colSpan={6}>
     <FormLabel htmlFor="gender" mt="2%">
         Gender
       </FormLabel>
       <Stack spacing={5} direction='row'>
       <Checkbox colorScheme="gray" size="md" >Male</Checkbox>
       <Checkbox colorScheme="gray" size="md" >Female</Checkbox>
       </Stack>
     </FormControl>
   </>
 );
};


const Signup = ({register,openRegister,closeRegister}) => {

 const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);

  return (
    <>
    <Modal isOpen={register} onClose={closeRegister}>
        <ModalOverlay />
        <ModalContent>
        <ModalCloseButton />

         <ModalBody border="1px solid black"  pb="30px">
          <Progress
          colorScheme="gray"
          hasStripe
          value={progress}
          mt="35px"
          mb="5%"
          mx="5%"
          isAnimated>
          </Progress>
          {step === 1 ? <Form1 /> : <Form2 />}
          <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                bgColor="black"
                color="white"
                variant="solid"
                _hover={{ bgColor:"white",color:"black",border:"2px solid black",fontWeight:"bold"}}
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                bgColor="black"
                color="white"
                variant="solid"
                _hover={{ bgColor:"white",color:"black",border:"2px solid black",fontWeight:"bold"}}
                >
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                bgColor="black"
                color="white"
                variant="solid"
                _hover={{ bgColor:"white",color:"black",border:"2px solid black",fontWeight:"bold"}}
       
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position:"top"
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
          </ButtonGroup>
         </ModalBody>

        </ModalContent>
     </Modal>
      </>
  )
}

export default Signup