import { Stack, Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ListProduct = ({ filterData, search }) => {
  const [products, setProducts] = useState([]);
  const fetchproducts = async () => {
    let response = await fetch(`${process.env.REACT_APP_URL}music/products`);
    let data = await response.json();
    data = data.filter((product) => {
      if (
        filterData.HeadphoneType &&
        product.Connectivity_Type !== filterData.HeadphoneType
      ) {
        return false;
      }
      if (filterData.company && product.Brand !== filterData.company) {
        return false;
      }
      if (filterData.color && product.Colour !== filterData.color) {
        return false;
      }
      if (
        filterData.price &&
        (parseInt(filterData.priceMin) > product.Selling_Price ||
          product.Selling_Price > parseInt(filterData.priceMax))
      ) {
        // console.log("price",product.Selling_Price)
        return false;
      }
      if (
        search &&
        !product.Title.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
    setProducts(data);
  };

  useEffect(() => {
    fetchproducts();
  }, [filterData, search]);
  return (
    <Stack mx={5}>
      {products.map((product) => (
        <Stack flexDirection={"row"} marginY={2}>
          <img
            width={250}
            height={200}
            src={product.imgSrc}
            alt={product._id}
          />
          <Box  display={'flex'} flexDirection={'column'} justifyContent={'start'} width={'70vw'} >
            <Typography variant="h4" fontSize={{xs:'24px',sm:'24px',md:'28px',lg:'30px'}}>
              {product.Brand} {product.Model}
            </Typography>
            <Typography variant="h6" fontSize={{xs:'18px',sm:'18px',md:'24px',lg:'24px'}}>price-₹{product.Selling_Price}</Typography>
            <Typography variant="h6" fontSize={{xs:'18px',sm:'18px',md:'24px',lg:'24px'}}>
              {product.Colour} | {product.Connectivity_Type}
            </Typography>
            <Typography variant="h6" fontSize={{xs:'18px',sm:'18px',md:'24px',lg:'24px'}}>{product.Title}</Typography>
            <Link to={`/ProductDetail/${product._id}`}>
            <Button
              variant="contained"
              fontSize={{xs:'18px',sm:'18px',md:'24px',lg:'24px'}}
              sx={{
                backgroundColor: "#2E0052",
                color: "#fff",
                textTransform: "capitalize",
                borderRadius: "25px",
                paddingX: "10px",
                width: "100px",
                fontStyle: 'Roboto'
                
              }}
            >
              Details
            </Button>
            </Link>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default ListProduct;
