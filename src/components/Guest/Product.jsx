import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,

} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = ({filterData,search}) => {
  const [products, setProducts] = useState([]);
  const fetchproducts = async () => {
    console.log(filterData)
    let response = await fetch(`${process.env.REACT_APP_URL}music/products`);
    let data = await response.json();
    data = data.filter((product) => {
      if (filterData.HeadphoneType && product.Connectivity_Type !== filterData.HeadphoneType) {
        return false;
      }
      if (filterData.company && product.Brand !== filterData.company) {
        return false;
      }
      if (filterData.color && product.Colour !== filterData.color) {
        return false; 
      }
      if (
        filterData.priceMin &&
        (parseInt(product.Selling_Price) < parseInt(filterData.priceMin.replace(/,/g, '')) ||
          parseInt(product.Selling_Price) > parseInt(filterData.priceMax.replace(/,/g, '')))
      ) {
        console.log("price",product.Selling_Price,parseInt(filterData.priceMin),parseInt(filterData.priceMax))
        return false;
      }

      if (search && !product.Title.toLowerCase().includes(search.toLowerCase())) {
        return false; 
      }
      
      return true;
    });
    setProducts(data);
  };

  useEffect(() => {
    fetchproducts();
  }, [filterData,search]);
  
  return (
    <Grid container spacing={2} >
    {products.map((product) => (
      <Grid item xs={6} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 250, height: 380, mb:'50px' }} >
      <Link to={`/ProductDetail/${product._id}`}>
      <CardMedia
        component="img"
        image={product.imgSrc}
        key={product._id}
        alt={product._id} 
        sx={{objectFit: 'contain', height: 180}}
      />
      </Link>
      <CardContent sx={{
        textAlign: 'center'
      }}>
        <Typography>
        {product.Brand} {product.Model}
        </Typography>
        <Typography>
        {product.Selling_Price}
        </Typography>
        <Typography>
         {product.Colour} | {product.Form_Factor}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    ))}
  </Grid>
  );
};

export default Product;
