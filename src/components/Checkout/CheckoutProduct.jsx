import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, TextField, Button, Card, CardContent, CardMedia, Select, MenuItem, FormControl, InputLabel, Stack } from '@mui/material';
import LogoCard from '../Header/LogoCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Payment from '../stripe_pay/Payment';
const CheckoutProduct = () => {
  let navigate = useNavigate();
  const cartitem = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    username : "",
    address : "",
    payment : "Debit card"
})
  const handlechange = (e) => {
    const { name, value } = e.target
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  console.log(form)
  useEffect(() => {
    const storedCart = cartitem || [];
    setCartItems(storedCart);
  }, []);

  const totalMRP = cartItems.reduce((total, item) => total + (item.quantity*item.Selling_Price), 0);
  const deliveryFee = 45;
  const totalAmount = totalMRP + deliveryFee;

  return (
    <Stack mx={5} >
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
          Back to Cart
        </Button>

      </Box>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>Checkout</Typography>
        <Grid container spacing={3}>
          {/* Left Section */}
          <Grid item xs={12} sm={12} md={8} lg={8}>
            {/* Delivery Address */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: 'red' }}>1. Delivery address</Typography>
              <TextField name='username' placeholder='Enter name here' onChange={handlechange}></TextField>
            <TextField
              fullWidth
              multiline
              rows={3}
              name='address'
              placeholder="Address"
              variant="outlined"
              margin="normal"
              onChange={handlechange}
            />
          </Box>
          {/* Payment Method */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'red' }}>2. Payment method</Typography>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Mode of payment</InputLabel>
              <Select name='payment' label="Mode of payment" defaultValue="Credit Card" onChange={handlechange}>
                <MenuItem value="Credit Card">Credit Card</MenuItem>
                <MenuItem value="Debit Card">Debit Card</MenuItem>
                {/* <MenuItem value="UPI">UPI</MenuItem> */}
                {/* <MenuItem value="Cash on Delivery">Cash on Delivery</MenuItem> */}
              </Select>
            </FormControl>
          </Box>
          {/* Review Items */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'red' }}>3. Review items and delivery</Typography>
            <Grid container spacing={2}>
              {cartItems.map((item, index) => (
                <Grid item xs={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="100"
                      image={item.imgSrc} // Assuming imgSrc is the key for image URL
                      alt={item.Model}
                      sx={{
                        width: '20',
                        height: '20',
                        objectFit: 'contain'
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 2 }}>
              {cartItems.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.Brand} {item.Model}</Typography>
                  <Typography variant="body2">Colour: {item.Colour}</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Estimated delivery: Monday — FREE Standard Delivery</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        {/* Right Section */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>Order Summary</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Items</Typography>
                <Typography>₹{totalMRP.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Delivery</Typography>
                <Typography>₹{deliveryFee.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, borderTop: '1px solid #ddd', pt: 1 }}>
                <Typography variant="h6">Order Total</Typography>
                <Typography variant="h6">₹{totalAmount.toFixed(2)}</Typography>
              </Box>
              <Payment form={form} />
              <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
                By placing your order, you agree to Musicart privacy notice and conditions of use.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </Stack >
  );
};

export default CheckoutProduct;
