import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Select,
  MenuItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart,updateItemQuantity } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = ({ item, onRemove,handleQuantityChange }) => (
  
  <Card sx={{ display: "flex",flexDirection: { xs: "column", sm: "column", md: "row" }, mb: 2 }}>
    <CardMedia
      component="img"
      sx={{ width: 150, objectFit: "contain" }}
      image={item.image}
      alt={item.name}
    />
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Colour: {item?.color}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          In Stock
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          ₹{item?.price}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Typography>Quantity</Typography>
        <Select
          defaultValue={item?.quantity}
          sx={{ ml: 2 }}
          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((quantity) => (
            <MenuItem key={quantity} value={quantity}>
              {quantity}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
      <Typography variant="h6">₹{item.price*item.quantity}</Typography>
      <Button
        variant="contained"
        color="error"
        sx={{ ml: 2 }}
        onClick={() => onRemove(item.id)}
      >
        REMOVE FROM CART
      </Button>
    </Box>
  </Card>
);

const CartProducts = () => {
  let Navigate = useNavigate();
  const cartitem = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(cartitem)
  
  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };
  
  const handleQuantityChange = (id, quantity) => {
    dispatch(updateItemQuantity({ _id: id, quantity }));
  };
  
  const cartItems = cartitem.map((product) => {
    return {
      name: product.Brand + " " + product.Model,
      color: product.Colour,
      price: product.Selling_Price,
      image: product.imgSrc,
      id: product._id,
      quantity: product.quantity,
    };
  });

  const totalMRP = cartItems.reduce((total, item) => total + (item.price*item.quantity), 0);
  const discount = 0;
  const convenienceFee = 45;
  const totalAmount = totalMRP + convenienceFee;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        My Cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} onRemove={handleRemove} handleQuantityChange={handleQuantityChange}/>
          ))}
          <Typography variant="h6">{cartitem.length} Item(s)</Typography>
        </Grid>
        <Grid item xs={12} md={4} display={cartitem.length === 0 ? "none" : "grid" }>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              PRICE DETAILS
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Total MRP</Typography>
              <Typography>₹{totalMRP}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Discount on MRP</Typography>
              <Typography>₹{discount}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Convenience Fee</Typography>
              <Typography>₹{convenienceFee}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography variant="h6">Total Amount</Typography>
              <Typography variant="h6">₹{totalAmount}</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => Navigate("/checkout")}
            >
              PLACE ORDER
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartProducts;
