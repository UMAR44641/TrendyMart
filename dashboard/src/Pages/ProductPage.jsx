import {Flex,IconButton,InputGroup,useToast  , Stack,Modal,ModalOverlay,ModalContent,ModalFooter,ModalHeader,Textarea,Box,FormLabel,Input,ModalCloseButton,ModalBody ,useDisclosure,Button, Container, Spacer,} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import {AddIcon,SearchIcon} from "@chakra-ui/icons"
import { useRef ,useState,useEffect } from "react";
import axios from "axios";
import "./productcard.css"
import Pagination from "../components/Pagination";


export default function ProductsPage() {
  const toast=useToast()

  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputRef = useRef(null);
  const handleButtonClick = () => {
    inputRef.current.click();
  };


  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading,setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const getData = async () => {
    try {
      setLoading(true)
      let response = await axios.get(
        "https://courageous-tuxedo-dog.cyclic.app/products"
      );
      setData(response.data);
      setFilteredData(response.data);
      setLoading(false)
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let result = data.filter((item) => {
      return item.desc.toLowerCase().match(search.toLowerCase());
    });
    setFilteredData(result);
  }, [search]);
  const token = JSON.parse(localStorage.getItem("adminLoginData"));
  const handleDelete = async (id) => {
    axios
      .delete(
        `https://courageous-tuxedo-dog.cyclic.app/products/delete/${id}`,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
       
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [cutprice, setCutPrice] = useState();
  const [url, setUrl] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUrl(reader.result);
    };
  };
  const CreateItem=()=>{
    const payload = {
      title,desc,price,stock,cutprice,url,category
    }
    axios
      .post(
        "https://courageous-tuxedo-dog.cyclic.app/products/upload",payload,{
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((response) => {
        if(response.data.message=="Product uploaded successfully"){
          toast({
            title: "Product added.",
            description: "Product uploaded successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
           setTitle("")
           setCutPrice()
          setUrl(null)
          setDesc("")
          setPrice()
          setStock  ()
          setCategory("")
          onClose()
          getData()
        }

      })
      .catch((error) => {
        console.error(error);
      });

  }

  const handleUpdate = (id, payload) => {
    axios
      .patch(
        `https://courageous-tuxedo-dog.cyclic.app/products/update/${id}`,
        payload,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((response) => {
        if (response.data.message == "product details updated successfully") {
          toast({
            title: "Product Updated.",
            description: "Product details updated successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          onClose();
          getData();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div>
      {loading ? (
        <p style={{ textAlign: "center", fontSize: "30px" }}>Loading...</p>
      ) : (
        <div>
          <Flex gap="54">
            <InputGroup>
              <Input
                type="text"
                borderColor="skyBlue"
                placeholder="Search any product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
            <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
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
              </ModalBody>

              <ModalFooter>
                <Button onClick={CreateItem} colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <div className="grid">
            {currentItems.map((item) => (
              <ProductCard
                key={item._id}
                item={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageClick={handlePageClick}
          />
        </div>
      )}
    </div>
  );
}
