import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,InputGroup,InputRightElement,FormErrorMessage
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from "../redux/auth/auth.action"
import React from "react"
import {ViewIcon,ViewOffIcon} from "@chakra-ui/icons"
import { useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"

export default function LoginC() {
  const navigate = useNavigate()
  const { isAuth } = useSelector((store) => {
    return store.auth;
  });
   const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error1, setError1] = React.useState(false);
  const [error2, setError2] = React.useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "" && password == "") {
      setError1(true);
      setError2(true);
    } else if (password == "") {
      setError2(true);
    } else if (email == "") {
      setError1(true);
    } else {
      dispatch(
        login({ email, password }, toast,setEmail, setPassword)
      );
      
      
    }
    
  };
  
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired isInvalid={error1}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError1(false);
                }}
              />
              {error1 ? (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl id="password" isRequired isInvalid={error2}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  focusBorderColor="black"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError2(false);
                  }}
                />

                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {error2 ? (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              ) : null}
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have a account?{" "}
                  <Link to="/signup" style={{ textDecoration: "underline" }}>
                    Signup
                  </Link>
                </Text>
              </Stack>
              <Button
                onClick={handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
