import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Footer from '../Footer';
const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <CelebrationIcon color="info" sx={{ fontSize: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Order is placed successfully!
      </Typography>
      <Typography variant="body1" gutterBottom>
        You will be receiving a confirmation email with order details
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome} sx={{ mt: 4 }}>
        Go back to Home page
      </Button>
    </Container>
    <Box sx={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
    }}>
    <Footer />
    </Box>
    </>
  );
};

export default OrderConfirmation;
