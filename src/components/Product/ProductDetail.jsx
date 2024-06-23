import LogoCard from "../Header/LogoCard";
import {
  Stack,
  Box,
  Button,
  Typography,
  InputAdornment,
  Input,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addItemToCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../redux/slices/searchslice";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { ViewListRoundedIcon } from '@mui/icons-material/ViewListRounded';
import toast, { Toaster } from 'react-hot-toast';
const ProductDetail = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}music/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCart(product));
      toast.success('Item added to cart');
      // navigate('/cart');
    }
  };
  const [storedCart, setStoredCart] = useState(0);
  const cartitem = useSelector((state) => state.cart.items);
  console.log("clg", cartitem.length);
  useEffect(() => {
    setStoredCart(cartitem.length);
  }, [cartitem]);
  return (
    <>
    <Toaster/>
    <Stack>
      {/* desktop */}
      <Stack display={{ xs: "none", md: "flex", lg: "flex" }}>
        {/* <Header /> */}
      </Stack>
      {/* mobile */}
      <Stack>
        <Stack
          display={{
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
          }}
        >
          <Stack>
            <Stack
              color={"#fff"}
              bgcolor={"#2E0052"}
              padding={"20px"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Input
                sx={{ bgcolor: "#fff" }}
                fullWidth
                variant="outlined"
                placeholder="Search Musicart"
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              ></Input>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          mx={5}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <LogoCard />
              <Box my={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2E0052",
                    color: "#fff",
                    textTransform: "capitalize",
                    borderRadius: "10px",
                    width: "180px",
                    fontStyle: "Roboto",
                  }}
                  onClick={() => navigate(-1)}
                >
                  Back to Products
                </Button>
              </Box>
            </Box>
            <Box my={5}>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{
                  backgroundColor: "#1D7000",
                  color: "#fff",
                  px: "15px",
                  py: "8px",
                  borderRadius: "47px",
                  textDecoration: "none",
                }}
              >
                <ShoppingCartOutlinedIcon />
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>View Cart &nbsp; {storedCart}</span>
                </Link>
              </Box>
            </Box>
          </Box>
          <Stack flexDirection={"column"} my={2}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
              mx={5}
            >
              {product?.Title}
              {product?.Connectivity_Type}
              {product?.Form_Factor}{" "}
            </Typography>
            <Box display={"flex"} my={2} mx={5}>
              <Box border={"5px solid #2E0052"} height={"350px"} borderRadius={"10px"}>
                <img
                  src={product?.imgSrc}
                  alt={product?.Title}
                  style={{ width: "30vw", height: "100%" }}
                />
              </Box>
              <Box mx={5} py={1}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {product?.Brand + " " + product?.Model }
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  Price:- {product?.Selling_Price}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  {product?.Colour}|{product?.Form_Factor}
                </Typography>
                <Box marginBottom={1}>
                  <Typography
                    sx={{
                      fontSize: "17px",
                    }}
                  >
                    About this item
                  </Typography>
                  {/* <Typography
              sx={{
                fontSize: "20px",
              }}
            > */}
                  <List dense>
                    <ListItem>
                      <ListItemText
                        primary="Multi-Point Connection helps to pair with two
      Bluetooth devices at the same time"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Up to 50-hour battery life with quick charging (3 min
      charge for up to 1 hour of playback)"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Take noise cancelling to the next level with Sony’s
      Integrated Processor V1,so you can fully immerse
      yourself in the music"
                      />
                    </ListItem>
                  </List>
                  {/* </Typography> */}
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    Available - In stock
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    Brand - {product?.Brand}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      backgroundColor: "#FFD600",
                      color: "#000",
                      borderRadius: "10px",
                      width: "200px",
                      mt: "10px",
                      ":hover": { backgroundColor: "#FFD900", color: "#000" },
                    }}
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      backgroundColor: "#FFD600",
                      color: "#000",
                      borderRadius: "10px",
                      width: "200px",
                      mt: "10px",
                      ":hover": { backgroundColor: "#FFD900", color: "#000" },
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack
          mx={2}
          display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
        >
          <Box my={2}>
            <Link to="/">
              <KeyboardBackspaceIcon />
            </Link>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "#FFD600",
                width: "100%",
                color: "#000",
                borderRadius: "10px",
                ":hover": { backgroundColor: "#FFD900", color: "#000" },
              }}
            >
              Buy Now
            </Button>
          </Box>
          <Box my={2} border={"5px solid #2E0052"} borderRadius={"10px"}>
            <img
              src={product?.imgSrc}
              alt={product?.Title}
              style={{ width: "100%", height: "300px" }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "26px",
                fontWeight: "bold",
              }}
            >
              {product?.Title}
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                // fontWeight: 'bold',
              }}
            >
              {" "}
              Wireless Over-Ear Active Noise Cancellation Headphones with Mic,
              up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX
              & Voice{" "}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              color: "#2E0052",
              py: "10px",
            }}
          >
            <Link to="/">
              <HomeOutlinedIcon sx={{ fontSize: 30 }} />
            </Link>
            <Link to="/cart">
              <AddShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </Link>
            <Link to="/login">
              <Person2OutlinedIcon sx={{ fontSize: 30 }} />
            </Link>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {product?.Colour} | {product?.Form_Factor}
            </Typography>
          </Box>
          <Box marginBottom={1}>
            <Typography
              sx={{
                fontSize: "20px",
              }}
            >
              About this item
            </Typography>
            {/* <Typography
              sx={{
                fontSize: "20px",
              }}
            > */}
            <List dense>
              <ListItem>
                <ListItemText
                  primary="Multi-Point Connection helps to pair with two
      Bluetooth devices at the same time"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Up to 50-hour battery life with quick charging (3 min
      charge for up to 1 hour of playback)"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Take noise cancelling to the next level with Sony’s
      Integrated Processor V1,so you can fully immerse
      yourself in the music"
                />
              </ListItem>
            </List>
            {/* </Typography> */}
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Available - In stock
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Brand - {product?.Brand}
            </Typography>
          </Box>
          <Button
            sx={{
              backgroundColor: "#FFD600",
              width: "100%",
              height: "40px",
              color: "#000",
              borderRadius: "10px",
              ":hover": { backgroundColor: "#FFD900", color: "#000" },
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button
            sx={{
              backgroundColor: "#FFD600",
              width: "100%",
              height: "40px",
              color: "#000",
              borderRadius: "10px",
              margin: "10px 0",
              ":hover": { backgroundColor: "#FFD900", color: "#000" },
            }}
          >
            Buy Now
          </Button>
        </Stack>
      </Stack>
      <Stack>
        <Footer />
      </Stack>
    </Stack>
    </>
  );
};

export default ProductDetail;
