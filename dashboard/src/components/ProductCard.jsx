
import React,{ useRef,useState } from "react";


  

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Box,
  Center,
  useColorModeValue,
  DrawerOverlay,
  DrawerContent,
  Input,
  DrawerFooter,
  Heading,
  FormLabel,
  Text,
  Stack,
  Image,
  Button,
  useDisclosure,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,Textarea,
} from "@chakra-ui/react";


const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function ProductCard({item,onDelete,onUpdate}) {
  const token = JSON.parse(localStorage.getItem("adminLoginData"));
    const inputRef = useRef(null);
  

    const handleButtonClick = () => {
      inputRef.current.click();
    };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const cancelRef = React.useRef();
   function handleDeleteClick() {
     onDelete(item._id);
   }
 const [title, setTitle] = useState(item.title);
 const [desc, setDesc] = useState(item.desc);
 const [category, setCategory] = useState(item.category);
 const [price, setPrice] = useState(item.price);
 const [stock, setStock] = useState(item.stock);
 const [cutprice, setCutPrice] = useState(item.cutprice);
 const [url, setUrl] = useState(item.url);
 const handleImageChange = (event) => {
   const file = event.target.files[0];
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onloadend = () => {
     setUrl(reader.result);
   };
 };

 const editProduct=()=>{
  const payload = {
      title,desc,price,stock,cutprice,url,category
    }
    onUpdate(item._id,payload)
 }
  
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            // backgroundImage: {item.url},
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={item.url}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {item.title}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {item.desc.substring(0, 20)}...
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ₹{item.price}
            </Text>
            {/* <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text> */}
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <Button  ref={btnRef} colorScheme="teal" onClick={onOpen}>
              Edit
            </Button>
            <Button onClick={handleDeleteClick} colorScheme="red">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Update the product</DrawerHeader>
          <DrawerBody>
            <Stack>
              <Box>
                <FormLabel htmlFor="brand">Brand</FormLabel>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Put a brand"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="brand">Category</FormLabel>
                <Input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Put a category"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="brand">Stock</FormLabel>
                <Input
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="No. of stock"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Image</FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="owner">Price</FormLabel>
                <Input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="Put price"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="brand">Cut Price</FormLabel>
                <Input
                  value={cutprice}
                  onChange={(e) => setCutPrice(e.target.value)}
                  type="number"
                  id="cutprice"
                  placeholder="Cut price"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  id="desc"
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={editProduct} colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Center>
  );
}
