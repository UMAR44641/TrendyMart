import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import {
  
  InputRightElement,
  InputGroup,
  FormErrorMessage,
  Button,
  Checkbox,
  Stack,
  Box,
} from "@chakra-ui/react";

import {
  Progress,
  ButtonGroup,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import {Link} from "react-router-dom"

import { useToast } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Form1 = ({
  name,
  setname,
  email,
  setemail,
  password,
  setpassword,
  secretkey,
  setSecretKey,
  error1,
  seterror1,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <Heading
        w="100%"
        textAlign={"center"}
        mb="4%"
        fontSize={{ sm: "3xl", base: "2xl" }}
      >
        Admin Registration
      </Heading>

      <FormControl isRequired>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          id="name"
          placeholder="Your name"
          focusBorderColor="black"
        />
      </FormControl>

      <FormControl mt="2%" isRequired>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Enter email"
          focusBorderColor="black"
        />
        <FormHelperText color="gray.500">
          We'll never share your email.
        </FormHelperText>
      </FormControl>

      <FormControl isRequired isInvalid={error1}>
        <FormLabel htmlFor="password" mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            placeholder="Enter password"
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            focusBorderColor="black"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
              seterror1(false);
            }}
          />
          <InputRightElement h="full">
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {error1 ? (
          <FormErrorMessage>
            Password should have atleast 7 characters!
          </FormErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="name">Secret Key</FormLabel>
        <Input
          type="text"
          value={secretkey}
          onChange={(e) => {
            setSecretKey(e.target.value);
          }}
          id="key"
          placeholder="Enter your key"
          focusBorderColor="black"
        />
      </FormControl>
    </>
  );
};

const Form2 = ({
  error2,
  seterror2,
  age,
  setage,
  city,
  setcity,
  men,
  women,
  setmen,
  setwomen,
  mobile,
  setmobile,
  gender,
  setgender,
}) => {
  return (
    <>
      <Heading
        w="100%"
        textAlign={"center"}
        mb="4%"
        fontSize={{ sm: "3xl", base: "2xl" }}
      >
        User Details
      </Heading>
      <FormControl isRequired as={GridItem} colSpan={6}>
        <FormLabel htmlFor="city" mt="2%">
          City
        </FormLabel>
        <Input
          placeholder="Your city"
          type="text"
          id="city"
          focusBorderColor="black"
          value={city}
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
      </FormControl>

      <FormControl isRequired isInvalid={error2} as={GridItem} colSpan={6}>
        <FormLabel htmlFor="mobile" mt="2%">
          Mobile
        </FormLabel>
        <Input
          placeholder="Your mobile"
          type="number"
          id="mobile"
          focusBorderColor="black"
          value={mobile}
          onChange={(e) => {
            setmobile(e.target.value);
            seterror2(false);
          }}
        />
        {error2 ? (
          <FormErrorMessage>
            Mobile No. should have atleast 10 digits!
          </FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl isRequired as={GridItem} colSpan={6}>
        <FormLabel htmlFor="age" mt="2%">
          Age
        </FormLabel>
        <Input
          type="number"
          placeholder="Your age"
          id="age"
          focusBorderColor="black"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
      </FormControl>

      <FormControl isRequired as={GridItem} colSpan={6}>
        <FormLabel htmlFor="gender" mt="2%">
          Gender
        </FormLabel>
        <Stack spacing={5} direction="row">
          <Checkbox
            value="Male"
            colorScheme="gray"
            size="md"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setmen(value);
              } else {
                let new_str = men.replace(value, "");
                setmen(new_str);
              }
            }}
          >
            Male
          </Checkbox>
          <Checkbox
            value="Female"
            colorScheme="gray"
            size="md"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setwomen(value);
              } else {
                let new_str = women.replace(value, "");
                setwomen(new_str);
              }
            }}
          >
            Female
          </Checkbox>
        </Stack>
      </FormControl>
    </>
  );
};

export default function SignupC() {
  const navigate=useNavigate()
const [name, setname] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [city, setcity] = useState("");
const [age, setage] = useState("");
const [men, setmen] = useState("");
const [women, setwomen] = useState("");
const [mobile, setmobile] = React.useState("");
const [gender, setgender] = useState("");

const [error1, seterror1] = React.useState(false);
const [error2, seterror2] = React.useState(false);
const [secretkey, setSecretKey] = useState("");

const handleSubmit = async () => {
  const form = {
    name,
    email,
    password,
    city,
    age,
    gender: men || women,
    mobile,
    secretkey
  };
  if (
    form.name == "" ||
    form.email == "" ||
    form.password == "" ||
    form.city == "" ||
    form.mobile == "" ||
    form.age == "" ||
    form.gender == ""||
    form.secretkey ==""
  ) {
    toast({
      title: "Account cannot be created.",
      description: "Please fill all the required input fields!",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  } else if (password.length < 7) {
    seterror1(true);
    setStep(step - 1);
    setProgress(progress - 50);
  } else if (mobile.length < 10) {
    seterror2(true);
  } else {
    fetch("https://courageous-tuxedo-dog.cyclic.app/admins/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res)
        if (res.message == "You already have an account, please login") {
          toast({
            title: "Please Login.",
            description: "Admin already exists.",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        } else if (res.message == "Admin Registered successfully") {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          navigate("/")
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setname("");
    setemail("");
    setpassword("");
    setcity("");
    setage("");
    setmen("");
    setwomen("");
    setmobile("");
    setgender("");
    setSecretKey("")
    
  }
};
  
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Stack pt={6}>
          <h1 style={{ fontWeigt: "bold", fontSize: "20px" }} align={"center"}>
            Already a admin?{" "}
            <Link style={{ textDecoration: "underline" }} to="/">
              Login
            </Link>
          </h1>
        </Stack>
        <Progress
          colorScheme="gray"
          hasStripe
          value={progress}
          mt="35px"
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1
            error1={error1}
            seterror1={seterror1}
            name={name}
            setname={setname}
            email={email}
            setemail={setemail}
            password={password}
            setpassword={setpassword}
            secretkey={secretkey}
            setSecretKey={setSecretKey}
          />
        ) : (
          <Form2
            error2={error2}
            seterror2={seterror2}
            city={city}
            setcity={setcity}
            age={age}
            setage={setage}
            men={men}
            setmen={setmen}
            women={women}
            setwomen={setwomen}
            mobile={mobile}
            setmobile={setmobile}
            gender={gender}
            setgender={setgender}
          />
        )}
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
                _hover={{
                  bgColor: "white",
                  color: "black",
                  border: "2px solid black",
                  fontWeight: "bold",
                }}
                w={{ sm: "7rem", base: "4rem" }}
                mr="5%"
                size={{ sm: "md", base: "sm" }}
              >
                Back
              </Button>
              <Button
                w={{ sm: "7rem", base: "4rem" }}
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
                _hover={{
                  bgColor: "white",
                  color: "black",
                  border: "2px solid black",
                  fontWeight: "bold",
                }}
                size={{ sm: "md", base: "sm" }}
              >
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w={{ sm: "7rem", base: "4rem" }}
                bgColor="black"
                color="white"
                variant="solid"
                _hover={{
                  bgColor: "white",
                  color: "black",
                  border: "2px solid black",
                  fontWeight: "bold",
                }}
                size={{ sm: "md", base: "sm" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
