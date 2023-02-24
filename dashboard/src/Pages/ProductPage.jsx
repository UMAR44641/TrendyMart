import {Flex,IconButton,InputGroup,   Stack,Modal,ModalOverlay,ModalContent,ModalFooter,ModalHeader,Textarea,Box,FormLabel,Input,ModalCloseButton,ModalBody ,useDisclosure,Button, Container, Spacer,} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import {AddIcon,SearchIcon} from "@chakra-ui/icons"
import { useRef } from "react";


export default function ProductsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputRef = useRef(null);
  const handleButtonClick = () => {
    inputRef.current.click();
  };
  

  return (
    <>
      <Flex gap="54">
        <InputGroup >
          <Input
            type="text"
            borderColor="skyBlue"
            placeholder="Search any product"
          />
        </InputGroup>
        <Button  leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
          Create Product
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack>
              <Box>
                <FormLabel htmlFor="brand">Brand</FormLabel>
                <Input id="username" placeholder="Pick a brand" />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Image</FormLabel>
                <Input
                  type="file"
                  ref={inputRef}
                  display="none"
                  onChange={(event) => console.log(event.target.files)}
                />
                <Button onClick={handleButtonClick}>Choose File</Button>
              </Box>
              <Box>
                <FormLabel htmlFor="owner">Price</FormLabel>
                <Input type="number" id="file" placeholder="Put price" />
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr" }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
